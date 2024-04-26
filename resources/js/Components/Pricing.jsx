import { CheckIcon } from "@heroicons/react/20/solid";
import { Link, usePage } from "@inertiajs/react";

const includedFeatures = [
    "Quick numerology reports",
    "Reports emailed to you",
    "Based on GG33 official knowledge",
    "Secure and private",
];

export default function Pricing() {
    const { auth } = usePage().props; // Retrieves auth object from page props

    return (
        <div className="bg-gradient-to-r from-slate-300 to-slate-600 dark:bg-gradient-to-r dark:from-gray-500 dark:to-gray-800 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto text-gray-800 dark:text-green-500 max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Purchase Your Numerology Reading
                    </h2>
                    <p className="mt-6 text-lg text-gray-800 dark:text-green-300 leading-8">
                        Discover personalized insights with a one-time detailed
                        reading based on GG33 knowledge.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-lg rounded-3xl bg-white/90 backdrop-blur-sm shadow-lg ring-1 ring-gray-300 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight">
                            One-Time Reading
                        </h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Gain valuable insights into your life's path with
                            our expert numerology reading.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-gray-700">
                                What’s included:
                            </h4>
                            <div className="h-px flex-auto bg-gray-200" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon
                                        className="h-6 w-5 flex-none text-green-600"
                                        aria-hidden="true"
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-2 lg:mt-0 lg:w-full lg:max-w-sm lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-700/90 dark:bg-gray-900/90 py-10 text-center ring-1 ring-inset ring-gray-700/20 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-300">
                                    Pay once, own it forever
                                </p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-white">
                                        $35
                                    </span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-300">
                                        USD
                                    </span>
                                </p>
                                {auth.user ? (
                                    <Link
                                        as="button"
                                        href="/pay"
                                        className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                    >
                                        Get Access
                                    </Link>
                                ) : (
                                    <p className="mt-6 text-red-500">
                                        Please{" "}
                                        <Link
                                            href="/login"
                                            as="button"
                                            className="text-blue-500 underline"
                                        >
                                            log in
                                        </Link>{" "}
                                        or{" "}
                                        <Link
                                            href="/register"
                                            className="text-blue-500 underline"
                                        >
                                            register
                                        </Link>{" "}
                                        to purchase.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
