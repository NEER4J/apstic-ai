import Link from "next/link";
import { ArrowRight, FileText, ListOrdered, Mail } from "lucide-react";

const actions = [
  {
    title: "Blog list",
    description: "Review and manage all blog posts.",
    href: "/protected/blogs",
    icon: <ListOrdered className="h-5 w-5" />,
  },
  {
    title: "New blog",
    description: "Create a fresh post with SEO and FAQ.",
    href: "/protected/blogs/new",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Contact submissions",
    description: "See inbound leads from the contact form.",
    href: "/protected/contacts",
    icon: <Mail className="h-5 w-5" />,
  },
];

export default function ProtectedPage() {
  return (
    <div className="flex flex-col gap-10 text-[#161513]">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Admin</p>
        <h1 className="text-4xl font-semibold tracking-tight">Control Center</h1>
        <p className="text-gray-600 max-w-2xl">
          Quick access to content and inbound submissions. Choose an action to start.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {actions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className="border border-gray-200 bg-white px-5 py-6 flex flex-col gap-3 hover:border-gray-400 transition-colors"
          >
            <div className="flex items-center justify-between text-[#161513]">
              <span className="flex items-center gap-2 font-medium">{action.icon}{action.title}</span>
              <ArrowRight className="h-4 w-4 text-gray-500" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{action.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
