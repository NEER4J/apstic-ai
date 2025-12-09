"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { slugify } from "@/lib/utils";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes } from "@lexical/html";
import { FORMAT_TEXT_COMMAND } from "lexical";
import {
  $getSelection,
  $isRangeSelection,
  EditorState,
  LexicalEditor,
} from "lexical";
import { $setBlocksType } from "@lexical/selection";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import {
  ListItemNode,
  ListNode,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from "@lexical/list";
import { LinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { Loader2, Save, Trash2, Upload, X } from "lucide-react";

type BlogRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  author_name: string | null;
  tags: string[] | null;
  content_json: unknown | null;
  content_html: string | null;
  cover_image_url: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  meta_image_url: string | null;
  faq_json: { question: string; answer: string }[] | null;
  status: "draft" | "published";
  published_at: string | null;
  created_at: string;
};

type FormState = Omit<BlogRow, "id" | "created_at"> & { id?: string };

const emptyFaq = { question: "", answer: "" };
const emptyForm: FormState = {
  title: "",
  slug: "",
  author_name: "",
  tags: [],
  excerpt: "",
  content_json: null,
  content_html: "",
  cover_image_url: "",
  meta_title: "",
  meta_description: "",
  meta_keywords: "",
  meta_image_url: "",
  faq_json: [emptyFaq],
  status: "draft",
  published_at: null,
};

export function BlogEditor({ blogId }: { blogId?: string }) {
  const supabase = useMemo(() => createClient(), []);
  const router = useRouter();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(!!blogId);

  const [editorKey, setEditorKey] = useState(0);

  useEffect(() => {
    if (!blogId) return;
    const load = async () => {
      setLoading(true);
      const { data } = await supabase.from("blogs").select("*").eq("id", blogId).single();
      if (data) {
        const record = data as BlogRow;
        setForm({ ...record });
        // Force editor remount with new content
        setEditorKey(prev => prev + 1);
      }
      setLoading(false);
    };
    load();
  }, [blogId, supabase]);

  const handleUpload = async (file?: File) => {
    if (!file) return;
    setUploading(true);
    const filePath = `blog-images/${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from("blog-images").upload(filePath, file);
    if (!error) {
      const { data } = supabase.storage.from("blog-images").getPublicUrl(filePath);
      const url = data.publicUrl;
      setForm((prev) => ({
        ...prev,
        cover_image_url: url,
        meta_image_url: prev.meta_image_url || url,
      }));
    }
    setUploading(false);
  };

  const handleSave = async (publish = false) => {
    setSaving(true);
    
    console.log("Saving blog with content:", {
      content_html: form.content_html?.substring(0, 100),
      content_json: form.content_json,
    });
    
    const payload = {
      ...form,
      slug: form.slug ? slugify(form.slug) : slugify(form.title),
      status: publish ? "published" : form.status,
      published_at: publish ? new Date().toISOString() : form.published_at,
      meta_keywords: form.meta_keywords || null,
      author_name: form.author_name || null,
      tags: form.tags && form.tags.length ? form.tags : null,
      excerpt: form.excerpt || null,
      meta_title: form.meta_title || null,
      meta_description: form.meta_description || null,
      meta_image_url: form.meta_image_url || form.cover_image_url || null,
      cover_image_url: form.cover_image_url || null,
      faq_json: form.faq_json?.filter((f) => f.question && f.answer) || [],
      content_html: form.content_html || null,
      content_json: form.content_json || null,
    };

    console.log("Payload being sent:", payload);

    const { data, error } = await supabase
      .from("blogs")
      .upsert(payload as any)
      .select()
      .single();

    if (error) {
      console.error("Error saving blog:", error);
    }

    if (!error && data) {
      const saved = data as BlogRow;
      setForm({ ...saved });
      if (!blogId) {
        router.replace(`/protected/blogs/${saved.id}`);
      }
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!form.id) return;
    setSaving(true);
    await supabase.from("blogs").delete().eq("id", form.id);
    setSaving(false);
    router.push("/protected/blogs");
  };

  const toolbarButton = (
    label: string,
    onClick: () => void,
    active?: boolean,
  ) => (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-2 text-sm border border-gray-200 hover:border-gray-400 transition-colors ${
        active ? "bg-gray-100 text-[#161513]" : "text-gray-700"
      }`}
    >
      {label}
    </button>
  );

  const onChange = (editorState: EditorState, editor: LexicalEditor) => {
    // Get HTML from the editor state
    const htmlString = editorState.read(() => {
      return $generateHtmlFromNodes(editor);
    });
    
    // Get JSON representation
    const json = editorState.toJSON();
    
    console.log("Lexical onChange fired:", {
      htmlLength: htmlString?.length || 0,
      jsonRoot: json.root,
    });
    
    // Update form state
    setForm((prev) => ({
      ...prev,
      content_html: htmlString,
      content_json: json,
    }));
  };

  const initialConfig = useMemo(() => ({
    namespace: "blog-editor",
    editable: true,
    onError: console.error,
    nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode, LinkNode],
    editorState: form.content_json ? JSON.stringify(form.content_json) : undefined,
    theme: {
      paragraph: "mb-4 leading-7",
      heading: {
        h1: "text-3xl mb-4",
        h2: "text-2xl mt-6 mb-3",
        h3: "text-xl mt-4 mb-2",
      },
      quote: "border-l-4 border-gray-200 pl-4 italic text-gray-600",
      list: {
        ul: "list-disc pl-6 space-y-2",
        ol: "list-decimal pl-6 space-y-2",
        listitem: "my-1",
      },
      text: {
        bold: "font-semibold",
        italic: "italic",
        underline: "underline",
      },
    },
  }), [editorKey]);

  function Toolbar() {
    const [editor] = useLexicalComposerContext();

    const applyHeading = (tag: "h2" | "h3") => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => new HeadingNode(tag));
        }
      });
    };

    const toggleList = (ordered: boolean) => {
      editor.dispatchCommand(
        ordered ? INSERT_ORDERED_LIST_COMMAND : INSERT_UNORDERED_LIST_COMMAND,
        undefined,
      );
    };

    const setLink = () => {
      const url = prompt("URL");
      if (url === null) return;
      if (url === "") {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
      } else {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
      }
    };

    const toolbarButton = (
      label: string,
      onClick: () => void,
      active?: boolean,
    ) => (
      <button
        type="button"
        onClick={onClick}
        className={`px-3 py-2 text-sm border border-gray-200 hover:border-gray-400 transition-colors ${
          active ? "bg-gray-100 text-[#161513]" : "text-gray-700"
        }`}
      >
        {label}
      </button>
    );

    return (
      <div className="flex flex-wrap gap-2">
        {toolbarButton("H2", () => applyHeading("h2"))}
        {toolbarButton("H3", () => applyHeading("h3"))}
        {toolbarButton("Bold", () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold"))}
        {toolbarButton("Italic", () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic"))}
        {toolbarButton("Bullet", () => toggleList(false))}
        {toolbarButton("Numbered", () => toggleList(true))}
        {toolbarButton("Quote", () =>
          editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
              $setBlocksType(selection, () => new QuoteNode());
            }
          })
        )}
        {toolbarButton("Link", setLink)}
        {toolbarButton("Clear list", () => editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 text-[#161513]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            {blogId ? "Edit blog" : "New blog"}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight mt-2 text-[#161513]">
            {form.title || "Untitled post"}
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Draft and publish with SEO, tags, FAQ, and cover uploads.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => handleSave(false)}
            disabled={saving || loading}
            className="bg-white text-black hover:bg-white/80"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
            Save draft
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleSave(true)}
            disabled={saving || loading}
          >
            Publish
          </Button>
          {form.id && (
            <Button variant="outline" onClick={handleDelete} disabled={saving}>
              <Trash2 className="h-4 w-4 mr-2" /> Delete
            </Button>
          )}
        </div>
      </div>

      <div className="border border-gray-200 bg-white p-5 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Title</label>
            <Input
              value={form.title}
              onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
              placeholder="Blog title"
              className="bg-white border-gray-300 text-[#161513]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Slug</label>
            <Input
              value={form.slug}
              onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
              placeholder="auto-generated from title"
              className="bg-white border-gray-300 text-[#161513]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Author</label>
            <Input
              value={form.author_name || ""}
              onChange={(e) => setForm((prev) => ({ ...prev, author_name: e.target.value }))}
              placeholder="Author name"
              className="bg-white border-gray-300 text-[#161513]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Tags</label>
            <div className="flex flex-wrap gap-2 p-2 border border-gray-300 bg-white min-h-[42px] rounded-md">
              {(form.tags || []).map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 border border-gray-200 text-[#161513] rounded"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => {
                      const next = (form.tags || []).filter((_, i) => i !== idx);
                      setForm((prev) => ({ ...prev, tags: next }));
                    }}
                    className="hover:text-red-600 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              <input
                type="text"
                placeholder="Type and press Enter..."
                className="flex-1 min-w-[150px] outline-none text-sm text-[#161513]"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const value = e.currentTarget.value.trim();
                    if (value && !(form.tags || []).includes(value)) {
                      setForm((prev) => ({
                        ...prev,
                        tags: [...(prev.tags || []), value],
                      }));
                      e.currentTarget.value = "";
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-600">Excerpt</label>
          <Textarea
            value={form.excerpt || ""}
            onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
            rows={3}
            placeholder="Short teaser for listings"
            className="bg-white border-gray-300 text-[#161513]"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-600">Body</label>
            {uploading && (
              <span className="text-xs text-gray-600 flex items-center gap-2">
                <Loader2 className="h-3 w-3 animate-spin" /> Uploading...
              </span>
            )}
          </div>
          <div className="border border-gray-200 bg-white">
            <LexicalComposer key={editorKey} initialConfig={initialConfig}>
              <div className="flex flex-col">
                <div className="border-b border-gray-200 p-3 bg-gray-50">
                  <Toolbar />
                </div>
                <div className="relative min-h-[400px]">
                  <RichTextPlugin
                    contentEditable={
                      <ContentEditable 
                        className="outline-none p-4 min-h-[400px] leading-7 text-[#161513] prose prose-lg max-w-none" 
                        style={{ caretColor: '#161513' }}
                      />
                    }
                    placeholder={
                      <div className="absolute top-4 left-4 text-gray-400 pointer-events-none select-none">
                        Start writing your blog content...
                      </div>
                    }
                    ErrorBoundary={LexicalErrorBoundary}
                  />
                </div>
                <HistoryPlugin />
                <ListPlugin />
                <LinkPlugin />
                <OnChangePlugin onChange={onChange} />
              </div>
            </LexicalComposer>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleUpload(e.target.files?.[0])}
              />
              <div className="flex items-center gap-2 text-[#161513]">
                <Upload className="h-4 w-4" />
                Upload cover image
              </div>
            </label>
            {form.cover_image_url && (
              <span className="text-xs truncate max-w-[220px]">
                {form.cover_image_url}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border border-gray-200 bg-white p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">SEO</h3>
            <span className="text-xs text-gray-500">Meta + social</span>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Meta Title</label>
            <Input
              placeholder="SEO title for search engines"
              value={form.meta_title || ""}
              onChange={(e) => setForm((prev) => ({ ...prev, meta_title: e.target.value }))}
              className="bg-white border-gray-300 text-[#161513]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Meta Description</label>
            <Textarea
              placeholder="SEO description for search engines"
              value={form.meta_description || ""}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  meta_description: e.target.value,
                }))
              }
              rows={3}
              className="bg-white border-gray-300 text-[#161513]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Meta Keywords</label>
            <Input
              placeholder="Comma separated keywords"
              value={form.meta_keywords || ""}
              onChange={(e) => setForm((prev) => ({ ...prev, meta_keywords: e.target.value }))}
              className="bg-white border-gray-300 text-[#161513]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Social Share Image</label>
            <Input
              placeholder="Leave empty to use cover image"
              value={form.meta_image_url || ""}
              onChange={(e) => setForm((prev) => ({ ...prev, meta_image_url: e.target.value }))}
              className="bg-white border-gray-300 text-[#161513]"
            />
            <p className="text-xs text-gray-500">
              Used for Twitter, Facebook, LinkedIn previews. Defaults to cover image if empty.
            </p>
          </div>
        </div>

        <div className="border border-gray-200 bg-white p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">FAQ</h3>
            <span className="text-xs text-gray-500">Structured Q&A</span>
          </div>
          {form.faq_json?.map((item, idx) => (
            <div key={idx} className="border border-gray-200 bg-white p-3 space-y-3">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Question {idx + 1}</label>
                <Input
                  placeholder="Enter the question"
                  value={item.question}
                  onChange={(e) => {
                    const next = [...(form.faq_json || [])];
                    next[idx] = { ...next[idx], question: e.target.value };
                    setForm((prev) => ({ ...prev, faq_json: next }));
                  }}
                  className="bg-white border-gray-300 text-[#161513]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Answer {idx + 1}</label>
                <Textarea
                  placeholder="Enter the answer"
                  value={item.answer}
                  onChange={(e) => {
                    const next = [...(form.faq_json || [])];
                    next[idx] = { ...next[idx], answer: e.target.value };
                    setForm((prev) => ({ ...prev, faq_json: next }));
                  }}
                  rows={2}
                  className="bg-white border-gray-300 text-[#161513]"
                />
              </div>
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const next = (form.faq_json || []).filter((_, i) => i !== idx);
                    setForm((prev) => ({ ...prev, faq_json: next.length ? next : [emptyFaq] }));
                  }}
                >
                  <Trash2 className="h-4 w-4 mr-1" /> Remove
                </Button>
              </div>
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() =>
              setForm((prev) => ({
                ...prev,
                faq_json: [...(prev.faq_json || []), emptyFaq],
              }))
            }
          >
            Add FAQ
          </Button>
        </div>
      </div>
    </div>
  );
}

