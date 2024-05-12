import { CheckIcon } from "@heroicons/react/20/solid";
import { Link, usePage } from "@inertiajs/react";
import PricingList from "./PricingList";

const includedFeatures = [
    "Quick numerology reports",
    "Reports emailed to you",
    "Based on GG33 official knowledge",
    "Secure and private",
];

export default function Pricing() {
    const pricingPlans = [
        {
            title: "One-Time Reading",
            price: "$8",
            features: [
                "Quick numerology reports",
                "Reports emailed to you",
                "Based on GG33 official knowledge",
                "Secure and private",
            ],
        },
    ];

    return (
        <>
            <PricingList
                title="Purchase Your Numerology Reading"
                description="Discover personalized insights with a one-time detailed reading based on GG33 knowledge."
                pricingItems={pricingPlans}
            />
        </>
    );
}
