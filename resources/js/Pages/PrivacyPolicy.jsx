import React from "react";
import { Head } from "@inertiajs/react";

const PrivacyPolicy = () => {
    const company = "GG33 SpeedRead";
    const contact = "support@gg33speedread.com";
    return (
        <div className="bg-white text-gray-700 p-8 leading-relaxed">
            <Head title="Privacy Policy" />
            <h1 className="text-2xl font-bold text-center mb-4">
                Privacy Policy
            </h1>
            <div
                className="max-w-4xl mx-auto overflow-y-auto"
                style={{ height: "80vh" }}
            >
                <h2 className="text-xl font-semibold">1. Introduction</h2>
                <p>
                    At {company}, your privacy is of great importance to us. We
                    are committed to protecting the privacy of your information
                    and explain here how we collect, use, and disclose your
                    personal data.
                </p>

                <h2 className="text-xl font-semibold">
                    2. Information Collection
                </h2>
                <p>
                    We collect information that you provide directly to us when
                    you register, make a purchase, post a review, or otherwise
                    communicate with us. This may include your name, email
                    address, phone number, and payment information.
                </p>

                <h2 className="text-xl font-semibold">3. Use of Information</h2>
                <p>
                    The information we collect is used to fulfill our services,
                    to communicate with you about our services, to comply with
                    our legal obligations, and to improve our services. We do
                    not sell, trade, or otherwise transfer your personally
                    identifiable information to outside parties.
                </p>

                <h2 className="text-xl font-semibold">4. Data Security</h2>
                <p>
                    We implement a variety of security measures to maintain the
                    safety of your personal information when you enter, submit,
                    or access your personal information. Despite our efforts, no
                    security measures are completely secure, and we cannot
                    guarantee the security of your information.
                </p>

                <h2 className="text-xl font-semibold">5. Third-Party Links</h2>
                <p>
                    Occasionally, at our discretion, we may include or offer
                    third-party products or services on our website. These
                    third-party sites have separate and independent privacy
                    policies. We therefore have no responsibility or liability
                    for the content and activities of these linked sites.
                </p>

                <h2 className="text-xl font-semibold">6. Consent</h2>
                <p>By using our site, you consent to our privacy policy.</p>

                <h2 className="text-xl font-semibold">
                    7. Changes to Our Privacy Policy
                </h2>
                <p>
                    If we decide to change our privacy policy, we will post
                    those changes on this page, and/or update the Privacy Policy
                    modification date below.
                </p>

                <h2 className="text-xl font-semibold">
                    8. Contact Information
                </h2>
                <p>
                    If you have any questions regarding this privacy policy, you
                    may contact us using the information below:
                </p>
                <p>
                    {company} <br />
                    Email:{" "}
                    <a
                        href={`mailto:${contact}`}
                        className="text-green-500 hover:underline"
                    >
                        {contact}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
