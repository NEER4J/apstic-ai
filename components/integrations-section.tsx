import React from "react";
import { Database, FileText, Layout, Mail, MessageSquare, ShoppingBag } from "lucide-react";

const SYSTEMS = [
    { name: "Sales & CRM", detail: "Leads · accounts · follow-up", icon: Layout },
    { name: "Communication", detail: "Email · chat · team messages", icon: Mail },
    { name: "Customer support", detail: "Requests · context · routing", icon: MessageSquare },
    { name: "Documents & forms", detail: "Fields · checks · exceptions", icon: FileText },
    { name: "Commerce & finance", detail: "Orders · invoices · records", icon: ShoppingBag },
    { name: "Data & internal tools", detail: "Sheets · databases · APIs", icon: Database },
];

export function IntegrationsSection() {
    return (
        <section id="services" className="w-full border-b border-gray-300 dark:border-stone-700 bg-[#fffefb] dark:bg-[#1f1515]">
            <div className="max-w-[1440px] mx-auto border-x border-gray-300 dark:border-stone-700">
                <div className="py-10 px-6 lg:p-20 border-b border-gray-300 dark:border-stone-700">
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 font-mono mb-4">FITS YOUR STACK</p>
                    <h2 className="text-3xl lg:text-5xl font-medium text-[#161513] dark:text-white mb-6 tracking-tight">
                        Start With the Tools<br />Your Team Already Uses
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                        We map the handoffs first, then connect the right systems through native features, APIs, webhooks, or small custom services where they fit.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-gray-300 dark:bg-stone-700 gap-[1px]">
                    {SYSTEMS.map(({ name, detail, icon: Icon }) => (
                        <div key={name} className="bg-[#fffefb] dark:bg-[#1f1515] p-6 md:p-8 flex flex-col justify-between min-h-[190px] group hover:bg-[#f8f4ee] dark:hover:bg-[#251b1b] transition-colors">
                            <div className="flex items-start justify-start mb-8">
                                <Icon className="w-6 h-6 text-[#FF4A00]" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-lg font-medium text-[#161513] dark:text-white">{name}</span>
                                <span className="text-sm text-gray-600 dark:text-gray-400">{detail}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="border-t border-gray-300 px-6 py-5 font-mono text-xs uppercase tracking-wider text-gray-500 dark:border-stone-700 dark:text-gray-400">
                    The connection method depends on the system, its permissions, and how the workflow needs to behave.
                </p>
            </div>
        </section>
    );
}
