import { Header } from "@/components/header";
import Link from "next/link";

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen flex flex-col items-center bg-[#fffefb]">
            <div className="flex-1 w-full flex flex-col">
                <div className="w-full border-b border-gray-300">
                    <div className="max-w-[1440px] mx-auto border-x border-gray-300 px-6 lg:px-20 py-16">
                        <h1 className="text-5xl lg:text-6xl font-medium text-[#161513] mb-6 tracking-tight">
                            Terms & Conditions
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Last updated: December 2, 2025
                        </p>
                    </div>
                </div>

                <div className="w-full">
                    <div className="max-w-[1440px] mx-auto border-x border-gray-300 px-6 lg:px-20 py-16">
                        <div className="prose prose-lg max-w-none">

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">1. Acceptance of Terms</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Welcome to Apstic. By accessing or using our website and services, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our services.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">2. Services Description</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Apstic provides AI-powered automation systems and consulting services designed to help businesses streamline their operations. Our services include but are not limited to:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Custom automation system design and implementation</li>
                                    <li>AI integration and deployment</li>
                                    <li>Workflow optimization consulting</li>
                                    <li>Technical support and maintenance</li>
                                    <li>Training and onboarding</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">3. User Responsibilities</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    When using our services, you agree to:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Provide accurate, current, and complete information</li>
                                    <li>Maintain the security of your account credentials</li>
                                    <li>Notify us immediately of any unauthorized access</li>
                                    <li>Use our services in compliance with all applicable laws and regulations</li>
                                    <li>Not use our services for any illegal or unauthorized purpose</li>
                                    <li>Not interfere with or disrupt our services or servers</li>
                                    <li>Not attempt to gain unauthorized access to any part of our services</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">4. Payment Terms</h2>
                                <h3 className="text-2xl font-medium text-[#161513] mb-3 mt-6">4.1 Pricing</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Our services are provided on a custom pricing basis determined by the scope and complexity of your project. All prices are quoted in the agreed currency and exclude applicable taxes unless otherwise stated.
                                </p>

                                <h3 className="text-2xl font-medium text-[#161513] mb-3 mt-6">4.2 Payment</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Payment terms will be specified in your service agreement or invoice. We typically require:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>An initial deposit before work commences</li>
                                    <li>Milestone payments for larger projects</li>
                                    <li>Final payment upon project completion</li>
                                </ul>

                                <h3 className="text-2xl font-medium text-[#161513] mb-3 mt-6">4.3 Late Payments</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Late payments may be subject to interest charges and may result in suspension of services until payment is received.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">5. Intellectual Property</h2>
                                <h3 className="text-2xl font-medium text-[#161513] mb-3 mt-6">5.1 Our IP</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    All content, features, and functionality of our website and services, including but not limited to text, graphics, logos, images, and software, are owned by Apstic or our licensors and are protected by intellectual property laws.
                                </p>

                                <h3 className="text-2xl font-medium text-[#161513] mb-3 mt-6">5.2 Client IP</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Upon full payment, you will own the customized automation systems we create specifically for you. However, we retain ownership of:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Our proprietary frameworks and methodologies</li>
                                    <li>Reusable components and templates</li>
                                    <li>General knowledge and expertise gained during the project</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">6. Confidentiality</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our engagement. This obligation continues even after the termination of our services.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    We will not disclose your confidential information to third parties except as necessary to provide our services or as required by law.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">7. Warranties and Disclaimers</h2>
                                <h3 className="text-2xl font-medium text-[#161513] mb-3 mt-6">7.1 Service Warranty</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We warrant that our services will be performed in a professional and workmanlike manner. We will make reasonable efforts to correct any deficiencies brought to our attention within a reasonable timeframe.
                                </p>

                                <h3 className="text-2xl font-medium text-[#161513] mb-3 mt-6">7.2 Disclaimer</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">8. Limitation of Liability</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, APSTIC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    OUR TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU TO APSTIC IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">9. Termination</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Either party may terminate our agreement for convenience with written notice. The notice period and terms will be specified in your service agreement.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We may terminate or suspend your access immediately, without prior notice, if you breach these Terms.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Upon termination, you remain obligated to pay for all services rendered up to the termination date.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">10. Indemnification</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    You agree to indemnify, defend, and hold harmless Apstic and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of our services or violation of these Terms.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">11. Governing Law</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in India.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">12. Dispute Resolution</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    In the event of any dispute arising from these Terms or our services, the parties agree to first attempt to resolve the dispute through good faith negotiations.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    If the dispute cannot be resolved through negotiations within 30 days, either party may pursue other available legal remedies.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">13. Severability</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">14. Contact Information</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    If you have any questions about these Terms and Conditions, please contact us:
                                </p>
                                <div className="">
                                    <p className="text-gray-700 mb-2">
                                        <strong>Email:</strong> <a href="mailto:hello@apstic.com" className="text-[#FF4A00] hover:underline">hello@apstic.com</a>
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Phone:</strong> <a href="tel:+917470915225" className="text-[#FF4A00] hover:underline">+91 7470915225</a>
                                    </p>
                                </div>
                            </section>

                            <div className="mt-12 pt-8 border-t border-gray-300">
                                <Link href="/" className="inline-flex items-center text-[#FF4A00] hover:underline font-medium">
                                    ← Back to Home
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
