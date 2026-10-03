import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ClipboardCheck,
  Database,
  FileText,
  Headset,
  Layers,
  Mail,
  MessageSquare,
  Plug,
  ShieldCheck,
} from "lucide-react";

const callUrl = "https://cal.com/neeraj-sharma/30min";

const workflows = [
  {
    number: "01",
    icon: Mail,
    title: "Lead to next step",
    problem: "Enquiries arrive from forms, email, and chat.",
    outcome: "Capture the context, route it to the right owner, and prepare a useful follow-up.",
    control: "A person reviews the message before it is sent.",
  },
  {
    number: "02",
    icon: Headset,
    title: "Request to resolution",
    problem: "Support requests need sorting, context, and a timely response.",
    outcome: "Classify the request, find approved information, and draft or route the next action.",
    control: "Unclear or sensitive cases go to a person.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Document to system",
    problem: "Teams retype details from forms, invoices, and other documents.",
    outcome: "Extract fields, check them against your rules, and send exceptions for review.",
    control: "Important records are checked before they are committed.",
  },
  {
    number: "04",
    icon: Database,
    title: "Data to clear reporting",
    problem: "Updates and numbers live across too many tools.",
    outcome: "Bring the right data together and share a consistent operational update.",
    control: "The source system stays the source of truth.",
  },
];

const principles = [
  {
    title: "Use rules where rules work",
    description: "Keep routine handoffs predictable with clear conditions, validation, and fallbacks.",
  },
  {
    title: "Use AI where context matters",
    description: "Apply AI to messy inputs like requests and documents, with a defined job and approved sources.",
  },
  {
    title: "Keep people in the loop",
    description: "Set review points for decisions, exceptions, and actions that need human judgment.",
  },
];

const process = [
  {
    number: "01",
    title: "Map the work",
    description: "We trace what starts the process, where information goes, and where work gets stuck.",
  },
  {
    number: "02",
    title: "Choose the right first step",
    description: "We scope one useful workflow, the systems it touches, and how success will be measured.",
  },
  {
    number: "03",
    title: "Build and test",
    description: "We connect the tools, test normal and edge cases, and make review points clear.",
  },
  {
    number: "04",
    title: "Launch and improve",
    description: "We review how it performs in real work and refine it as the process changes.",
  },
];

const faqs = [
  {
    question: "What kinds of workflows do you build?",
    answer: "We focus on repeatable work that crosses tools: lead handling, support triage, document processing, CRM updates, reporting, and internal operations. We start with the workflow, then decide whether automation, AI, or a mix of both fits.",
  },
  {
    question: "Do we need to replace our current software?",
    answer: "Usually, no. We look at the systems you already use and connect them where it makes sense. If a tool or process is the actual bottleneck, we will call that out before proposing a build.",
  },
  {
    question: "How do you keep AI actions under control?",
    answer: "We define what the workflow can access and do, test it against real examples, and add approval or escalation steps where a person should make the call. We also plan for failures and exceptions instead of assuming every input will be clean.",
  },
  {
    question: "How do we get started?",
    answer: "Bring one repetitive process you would like to improve. We will map the current steps, the tools involved, and whether there is a sensible first automation to build.",
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#c84613]">
      <span className="h-2 w-2 rounded-full bg-[#ff4a00]" />
      {children}
    </p>
  );
}

export function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f8f6f1] text-[#191816]">
      <section className="relative border-b border-[#dedbd3]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_38%,rgba(255,74,0,0.08),transparent_28rem)]" />
        <div className="relative mx-auto grid max-w-[1320px] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <SectionLabel>AI workflow & automation studio</SectionLabel>
            <h1 className="max-w-[13ch] text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Make work move across your tools.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#58554f] sm:text-xl">
              Apstic connects the systems your team already uses and puts AI into the steps that need context. Routine work moves forward; people stay in control of the decisions that matter.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={callUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#ff4a00] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#d83d00] focus:outline-none focus:ring-2 focus:ring-[#ff4a00] focus:ring-offset-2"
              >
                Talk through a workflow <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#c9c5bc] bg-white/70 px-6 py-4 text-sm font-semibold transition hover:border-[#191816] focus:outline-none focus:ring-2 focus:ring-[#191816] focus:ring-offset-2"
              >
                See what we build <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-[#767168]">
              <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#ff4a00]" /> Built around your process</span>
              <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#ff4a00]" /> Works with your existing stack</span>
              <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#ff4a00]" /> Clear human review points</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[570px]">
            <div className="absolute -right-7 -top-8 h-28 w-28 rounded-full border border-[#ff4a00]/20" />
            <div className="absolute -bottom-7 -left-7 h-24 w-24 rounded-full bg-[#ff4a00]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-[#373530] bg-[#1c1b19] p-5 text-white shadow-[0_28px_80px_rgba(32,27,22,0.18)] sm:p-7">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">Example workflow</p>
                  <h2 className="mt-2 text-xl font-medium tracking-tight">A new lead gets handled</h2>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-[#ff4a00]/30 bg-[#ff4a00]/10 px-3 py-1.5 text-[10px] font-medium text-[#ff9a73]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff4a00]" /> Review stays with your team
                </div>
              </div>

              <div className="space-y-3 py-6">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/75"><Mail className="h-4 w-4" /></div>
                  <div className="min-w-0 flex-1"><p className="text-sm font-medium">Enquiry received</p><p className="mt-0.5 text-xs text-white/45">Website form · 10:42 am</p></div>
                  <span className="text-[10px] text-white/45">IN</span>
                </div>
                <div className="ml-7 h-4 border-l border-dashed border-white/20" />
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff4a00]/15 text-[#ff8d62]"><Bot className="h-4 w-4" /></div>
                  <div className="min-w-0 flex-1"><p className="text-sm font-medium">Context checked and routed</p><p className="mt-0.5 text-xs text-white/45">CRM updated · owner notified</p></div>
                  <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">Ready</span>
                </div>
                <div className="ml-7 h-4 border-l border-dashed border-white/20" />
                <div className="flex items-center gap-3 rounded-xl border border-[#ff4a00]/35 bg-[#ff4a00]/[0.08] p-3.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff4a00]/20 text-[#ff9a73]"><ClipboardCheck className="h-4 w-4" /></div>
                  <div className="min-w-0 flex-1"><p className="text-sm font-medium">Follow-up draft is ready</p><p className="mt-0.5 text-xs text-white/45">A person reviews before sending</p></div>
                  <span className="rounded-full border border-white/15 px-2 py-1 text-[10px] text-white/65">Review</span>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[10px] text-white/40">
                <span>Illustrative flow · scoped to your process</span>
                <span className="font-mono">APSTIC / 01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedbd3] bg-white/60">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 py-5 text-xs font-medium text-[#625f58] sm:px-8 lg:px-12">
          <span className="font-mono uppercase tracking-[0.14em] text-[#9a958a]">Workflows we improve</span>
          {["Lead response", "Customer requests", "Document handling", "CRM hygiene", "Operations reporting"].map((item) => (
            <span key={item} className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#ff4a00]" />{item}</span>
          ))}
        </div>
      </section>

      <section className="border-b border-[#dedbd3]" id="services">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-2xl">
            <SectionLabel>What we build</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Useful workflows, not another disconnected AI tool.</h2>
            <p className="mt-5 text-lg leading-8 text-[#625f58]">We start with the handoff slowing your team down, then connect the systems and steps around it.</p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {workflows.map((item) => (
              <article key={item.number} className="group rounded-2xl border border-[#e1ded7] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#ff4a00]/40 hover:shadow-[0_18px_45px_rgba(50,42,30,0.07)] sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0e9] text-[#d9470b]"><item.icon className="h-5 w-5" /></div>
                  <span className="font-mono text-xs text-[#a29d92]">{item.number}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#858076]">{item.problem}</p>
                <div className="mt-5 border-t border-[#eeeae3] pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#c84613]">A better flow</p>
                  <p className="mt-2 text-[15px] leading-7 text-[#4c4943]">{item.outcome}</p>
                </div>
                <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-[#79756c]"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#ff4a00]" />{item.control}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-[#89847a]">Examples describe the kinds of workflows we can scope; your systems and approval rules determine the final design.</p>
        </div>
      </section>

      <section className="border-b border-[#2e2c28] bg-[#1c1b19] text-white">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12 lg:py-24">
          <div>
            <SectionLabel>Built for real operations</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Give AI a job. Give your team the controls.</h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-white/65">Reliable automation is a system: the right access, clear rules, useful checks, and a way to handle the unexpected.</p>
            <a href="#approach" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#ff9a73] transition hover:text-white">How we work <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {principles.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                <span className="font-mono text-xs text-[#ff8d62]">0{index + 1}</span>
                <h3 className="mt-6 text-lg font-medium leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedbd3] bg-[#fffdfa]">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-24">
          <div>
            <SectionLabel>Fits your stack</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Keep the tools your team already knows.</h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-[#625f58]">We connect the systems around the work—using native integrations, APIs, webhooks, and small custom services where they fit.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: Layers, title: "Sales & CRM", items: "Leads · accounts · follow-up" },
              { icon: MessageSquare, title: "Communication", items: "Email · chat · support queues" },
              { icon: Database, title: "Commerce & finance", items: "Orders · invoices · reconciliation" },
              { icon: Plug, title: "Data & internal tools", items: "Spreadsheets · databases · APIs" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-[#e4e0d8] bg-white p-5 sm:p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f4f1ea] text-[#d9470b]"><item.icon className="h-5 w-5" /></div>
                <div><h3 className="font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-6 text-[#858076]">{item.items}</p></div>
              </div>
            ))}
            <div className="sm:col-span-2 rounded-2xl bg-[#f2eee6] px-5 py-4 text-sm leading-6 text-[#625f58]">
              We choose the connection method around your security needs, system limits, and how the workflow should be maintained.
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="border-b border-[#dedbd3]">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="max-w-md">
              <SectionLabel>Our approach</SectionLabel>
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Start small. Make it dependable. Then expand.</h2>
              <p className="mt-5 text-lg leading-8 text-[#625f58]">We work with the people who run the process, so the result fits the way work actually happens.</p>
              <a href={callUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#c84613] hover:text-[#191816]">Bring us one workflow <ArrowUpRight className="h-4 w-4" /></a>
            </div>
            <div className="divide-y divide-[#dedbd3] border-y border-[#dedbd3]">
              {process.map((item) => (
                <div key={item.number} className="grid gap-3 py-6 sm:grid-cols-[72px_0.7fr_1fr] sm:items-start sm:gap-5 sm:py-7">
                  <span className="font-mono text-sm text-[#c84613]">{item.number}</span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="max-w-lg text-sm leading-6 text-[#77736a]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedbd3] bg-white/65">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12 lg:py-24">
          <div>
            <SectionLabel>Questions, answered</SectionLabel>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Before we build anything.</h2>
            <p className="mt-5 text-lg leading-8 text-[#625f58]">Good automation starts with a good question about the work.</p>
          </div>
          <div className="divide-y divide-[#e6e2da] border-y border-[#e6e2da]">
            {faqs.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold marker:hidden sm:text-lg">
                  {item.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#dedbd3] text-[#77736a] transition group-open:rotate-45 group-open:border-[#ff4a00] group-open:text-[#c84613]">+</span>
                </summary>
                <p className="max-w-2xl pr-12 pt-4 text-sm leading-7 text-[#6f6b62]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#dedbd3]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <SectionLabel>Notes from Apstic</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-tight">Practical thinking on AI, systems, and operations.</h2>
          </div>
          <Link href="/blogs" className="inline-flex w-fit items-center gap-2 rounded-full border border-[#c9c5bc] bg-white px-5 py-3 text-sm font-semibold transition hover:border-[#191816]">Read the insights <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section id="about" className="bg-[#ff4a00] text-white">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-9 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-white/75">A good first step</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Pick one process that should take less effort.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">Tell us what happens today, which tools are involved, and where work gets stuck. We’ll help you see whether automation is the right fix.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={callUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#bd3900] transition hover:bg-[#fff4ed]">Book a workflow call <ArrowUpRight className="h-4 w-4" /></a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10">Send a message <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
