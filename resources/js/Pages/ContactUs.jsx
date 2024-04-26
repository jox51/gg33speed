import React from "react";
import { Head } from "@inertiajs/react";

const ContactUs = () => {
    const company = "GG33 SpeedRead";
    const contactEmail = "support@gg33speedread.com";

    return (
        <div className="bg-white text-gray-700 p-8 leading-relaxed">
            <Head title="Contact Us" />
            <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
            <div
                className="max-w-4xl mx-auto overflow-y-auto"
                style={{ height: "80vh" }}
            >
                <p>
                    If you have any questions, concerns, or comments, you may
                    contact us at:
                </p>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Customer Service:</h2>
                    <p>
                        Email:{" "}
                        <a
                            href={`mailto:${contactEmail}`}
                            className="text-green-500 hover:underline"
                        >
                            {contactEmail}
                        </a>
                    </p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Office Address:</h2>
                    <p>{company}</p>
                    <p>7901 4th St N</p>
                    <p>STE 12087</p>
                    <p>St. Petersburg, FL 33702</p>
                    <p>United States</p>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Business Hours:</h2>
                    <p>Monday - Friday: 9 AM - 5 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Follow Us:</h2>
                    <p>
                        Stay connected with us through our social media
                        channels:
                    </p>
                    <ul className="flex gap-4 mt-2">
                        <li>
                            <a
                                href="https://twitter.com/MatrixPrime_"
                                target="_blank"
                                className="text-blue-300 hover:underline"
                            >
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
