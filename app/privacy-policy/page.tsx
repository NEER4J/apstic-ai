import { Header } from "@/components/header";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen flex flex-col items-center bg-[#fffefb]">
            <div className="flex-1 w-full flex flex-col">
                <div className="w-full border-b border-gray-300">
                    <div className="max-w-[1440px] mx-auto border-x border-gray-300 px-6 lg:px-20 py-16">
                        <h1 className="text-5xl lg:text-6xl font-medium text-[#161513] mb-6 tracking-tight">
                            Privacy Policy
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
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">1. Introduction</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Welcome to Apstic ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">2. Information We Collect</h2>
                                <h3 className="text-2xl font-medium text-[#161513] mb-3 mt-6">2.1 Personal Information</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We collect personal information that you voluntarily provide to us when you:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                    <li>Register for an account</li>
                                    <li>Request information about our services</li>
                                    <li>Book a consultation or call</li>
                                    <li>Subscribe to our newsletter</li>
                                    <li>Contact us for support or inquiries</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    This information may include:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Name and company name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Business information</li>
                                    <li>Any other information you choose to provide</li>
                                </ul>

                                <h3 className="text-2xl font-medium text-[#161513] mb-3 mt-6">2.2 Automatically Collected Information</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    When you visit our website, we automatically collect certain information about your device, including:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>IP address</li>
                                    <li>Browser type and version</li>
                                    <li>Operating system</li>
                                    <li>Pages visited and time spent on pages</li>
                                    <li>Referral source</li>
                                    <li>Device identifiers</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">3. How We Use Your Information</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We use the information we collect or receive to:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Provide, operate, and maintain our services</li>
                                    <li>Process your requests and transactions</li>
                                    <li>Send you technical notices, updates, and support messages</li>
                                    <li>Respond to your inquiries and provide customer service</li>
                                    <li>Send marketing and promotional communications (with your consent)</li>
                                    <li>Improve and personalize your experience</li>
                                    <li>Analyze usage patterns and trends</li>
                                    <li>Detect, prevent, and address technical issues and security threats</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">4. Sharing Your Information</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We may share your information in the following situations:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li><strong>Service Providers:</strong> We may share your information with third-party vendors and service providers who perform services on our behalf</li>
                                    <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition</li>
                                    <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities</li>
                                    <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your consent</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    We do not sell your personal information to third parties.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">5. Data Security</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">6. Your Rights</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Depending on your location, you may have the following rights regarding your personal information:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Access and receive a copy of your personal information</li>
                                    <li>Rectify or update your personal information</li>
                                    <li>Delete your personal information</li>
                                    <li>Object to or restrict the processing of your personal information</li>
                                    <li>Data portability</li>
                                    <li>Withdraw consent at any time</li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    To exercise these rights, please contact us at <a href="mailto:hello@apstic.com" className="text-[#FF4A00] hover:underline">hello@apstic.com</a>.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">7. Cookies and Tracking Technologies</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">8. Third-Party Links</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">9. Children's Privacy</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us immediately.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">10. Changes to This Policy</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-3xl font-medium text-[#161513] mb-4">11. Contact Us</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    If you have any questions about this Privacy Policy, please contact us:
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
