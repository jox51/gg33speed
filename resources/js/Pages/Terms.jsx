import React from "react";
import { Head } from "@inertiajs/react";

const Terms = () => {
    const company = "GG33 SpeedRead";
    const contact = "support@gg33speedread.com";
    return (
        <div className="bg-white text-gray-700 p-8 leading-relaxed">
            <Head title="Terms" />
            <h1 className="text-2xl font-bold text-center mb-4">
                Terms and Conditions
            </h1>
            <div
                className="max-w-4xl mx-auto overflow-y-auto"
                style={{ height: "80vh" }}
            >
                <h2 className="text-xl font-semibold">1. Introduction</h2>
                <p>
                    Welcome to {company}. By accessing our website or using our
                    services, you agree to be bound by the following terms and
                    conditions. If you do not agree with any part of these
                    terms, you must not use our website or services.
                </p>

                <h2 className="text-xl font-semibold">
                    2. Intellectual Property Rights
                </h2>
                <p>
                    The content, arrangement and layout of this site, including,
                    but not limited to, the trademarks, photos, logos, and other
                    intellectual property contained within this site, are
                    protected under the United States and other intellectual
                    property laws and are owned or controlled by [Your Company
                    Name] or the party credited as the provider of the content.
                    Unauthorized use of these materials can violate intellectual
                    property rights. All rights not expressly granted herein are
                    reserved to {company} or the party credited.
                </p>

                <h2 className="text-xl font-semibold">3. User Obligations</h2>
                <p>
                    You agree not to use the Website in a way that may impair
                    the performance, corrupt the content or otherwise reduce the
                    overall functionality of the Website. You also agree not to
                    compromise the security of the Website or attempt to gain
                    access to secured areas or sensitive information.
                </p>

                <h2 className="text-xl font-semibold">
                    4. Modification of Terms
                </h2>
                <p>
                    We reserve the right to change these terms and conditions at
                    any time without notice. By continuing to use the site after
                    such changes, you agree to be bound by the modified terms.
                </p>

                <h2 className="text-xl font-semibold">
                    5. Limitation of Liability
                </h2>
                <p>
                    {company} will under no circumstance be liable for indirect,
                    special, or consequential damages including any loss of
                    business, revenue, profits, or data in relation to your use
                    of the Website.
                </p>

                <h2 className="text-xl font-semibold">6. Governing Law</h2>
                <p>
                    Any disputes involving {company} shall be adjudicated in the
                    jurisdiction of the state of [Your State/Province] and you
                    consent to exclusive jurisdiction and venue in such courts.
                </p>

                <h2 className="text-xl font-semibold">
                    7. Contact Information
                </h2>
                <p>
                    If you have any questions about these Terms, please contact
                    us at {contact} .
                    <a
                        href={`mailto:${contact}`}
                        className="block text-green-500 hover:underline"
                    >
                        Click Here to Email Us
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Terms;
