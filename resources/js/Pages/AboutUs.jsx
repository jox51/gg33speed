import React from "react";
import { Head } from "@inertiajs/react";
import GaryImage from "@/images/gary_pic.jpeg";

const AboutUs = () => {
    return (
        <div className="bg-white text-gray-700 p-8 leading-relaxed">
            <Head title="About Us" />
            <h1 className="text-2xl font-bold text-center mb-4">About Us</h1>
            <div className="flex flex-col items-center">
                <img
                    src={GaryImage}
                    alt="Gary the Numbers Guy"
                    className="rounded-full w-80 h-50 mb-4 object-cover"
                />
                <div
                    className="max-w-4xl w-full overflow-y-auto"
                    style={{ height: "75vh" }}
                >
                    <h2 className="text-xl font-semibold">
                        What is Numerology?
                    </h2>
                    <p className="mb-4">
                        Numerology is the study of numbers and their
                        significance in our lives. It offers insights and
                        guidance across various areas, helping individuals
                        navigate through life more effectively. Here’s how
                        numerology can assist you:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>
                            <strong>Self-Discovery:</strong> Reveals your
                            strengths, weaknesses, and life purpose, providing
                            insights into your personality and talents.
                        </li>
                        <li>
                            <strong>Career Guidance:</strong> Highlights your
                            natural talents and suggests appropriate career
                            paths, steering you towards professional
                            fulfillment.
                        </li>
                        <li>
                            <strong>Relationship Compatibility:</strong> Offers
                            insights into the dynamics with partners, family
                            members, or friends, aiming to foster healthier
                            relationships.
                        </li>
                        <li>
                            <strong>Timing of Events:</strong> Advises on
                            optimal times for major decisions or new endeavors,
                            helping you choose when to act or hold back.
                        </li>
                        <li>
                            <strong>Personal Growth:</strong> Identifies
                            opportunities for self-improvement and overcoming
                            life's hurdles, guiding your personal development.
                        </li>
                    </ul>
                    <p className="mb-4">
                        Overall, a numerology reading provides a profound
                        perspective on life's challenges and opportunities,
                        empowering you with knowledge to lead a fulfilling life.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">
                        Gary the Numbers Guy
                    </h2>
                    <p className="mb-4">
                        Gary the Numbers Guy, a world-renowned numerology
                        expert, has provided over 10,000 readings and offered
                        numerological advice to celebrities and professional
                        sports teams. With years of experience, Gary has
                        demonstrated an exceptional ability to help individuals
                        understand the deeper numerical influences in their
                        lives. His insights help reveal pathways to personal and
                        professional success, making him a sought-after figure
                        in the field of numerology.
                    </p>
                    <p>
                        Gary’s approach is straightforward yet profound,
                        focusing on practical numerology applications that cater
                        to everyday decision-making and long-term planning.
                        Whether you are looking for guidance in personal
                        affairs, career decisions, or interpersonal
                        relationships, Gary’s expertise offers valuable clarity
                        and direction.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
