import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
    {
        name: "Instant Insights",
        description:
            "Discover the secrets of your numerological patterns with instant analyses. Dive deep into the numbers that shape your destiny and personal journey.",
        icon: CloudArrowUpIcon,
    },
    {
        name: "Secure & Private",
        description:
            "Your privacy is paramount. Enjoy secure access to your personal readings with top-tier encryption ensuring your data remains private.",
        icon: LockClosedIcon,
    },
    {
        name: "Personalized Readings",
        description:
            "Tailored specifically to your unique numerological profile, our readings provide personalized insights that help you navigate life's challenges.",
        icon: ArrowPathIcon,
    },
    {
        name: "Advanced Security Features",
        description:
            "We prioritize your security with advanced features designed to protect and secure your personal information and ensure your readings are confidential.",
        icon: FingerPrintIcon,
    },
];

export default function Features() {
    return (
        <div
            id="features"
            className="bg-gradient-to-r from-gray-500 to-gray-600 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-800 py-24 sm:py-32 text-white"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-opacity-20 bg-black p-6 rounded-lg">
                        <h2 className="text-base font-semibold leading-7 text-white">
                            Explore Your Numerology
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                            Unlock the Secrets of the Elite
                        </p>
                        <p className="mt-6 text-lg leading-8">
                            Gain profound insights into your life with GG33
                            official speed reading. Explore your horoscope and
                            numerological profile.
                        </p>
                    </div>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 dark:bg-slate-700">
                                        <feature.icon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
