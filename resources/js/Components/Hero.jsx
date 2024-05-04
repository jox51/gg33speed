import { LandingPrimaryVideoCtaSection } from "@/Components/landing/cta/LandingPrimaryCta";
import { LandingDiscount } from "@/Components/landing/discount/LandingDiscount";
import { LandingProductHuntAward } from "@/Components/landing/social-proof/LandingProductHuntAward";
import { LandingSocialProof } from "@/Components/landing/social-proof/LandingSocialProof";

import { Button } from "@/Components/shared/ui/button";

export default function Hero() {
    const avatarItems = [
        {
            imageSrc: "https://picsum.photos/id/64/100/100",
            name: "John Doe",
        },
        {
            imageSrc: "https://picsum.photos/id/65/100/100",
            name: "Jane Doe",
        },
        {
            imageSrc: "https://picsum.photos/id/669/100/100",
            name: "Alice Doe",
        },
    ];

    return (
        <div className="w-full shadow-md">
            <LandingPrimaryVideoCtaSection
                title="Time to level up ↑ your front-end skills"
                description="Elevate your development game and achieve more with our awesome front-end learning center. It's dynamic, beginner-friendly, and designed with you in mind!"
                autoPlay
                controls={false}
                videoPosition="center"
                videoSrc="https://cache.shipixen.com/features/11-pricing-page-builder.mp4"
                withBackground
                variant="secondary"
                leadingComponent={<LandingProductHuntAward />}
            >
                <Button size="xl" variant="secondary" asChild>
                    <a href="#">Get started</a>
                </Button>

                <Button size="xl" variant="outlineSecondary">
                    <a href="#">Learn More</a>
                </Button>

                <LandingDiscount
                    discountValueText="$50 off"
                    discountDescriptionText="for the first 20 customers (5 left)"
                />

                <LandingSocialProof
                    className="w-full mt-12"
                    showRating
                    numberOfUsers={12000}
                    suffixText="happy users"
                    avatarItems={avatarItems}
                />
            </LandingPrimaryVideoCtaSection>
        </div>
    );
}
