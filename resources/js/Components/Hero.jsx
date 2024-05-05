import { LandingPrimaryVideoCtaSection } from "@/Components/landing/cta/LandingPrimaryCta";
import { LandingDiscount } from "@/Components/landing/discount/LandingDiscount";
import { LandingProductHuntAward } from "@/Components/landing/social-proof/LandingProductHuntAward";
import { LandingSocialProof } from "@/Components/landing/social-proof/LandingSocialProof";

import { Button } from "@/Components/shared/ui/button";
import DemoVideo from "@/videos/demo-video.mp4";

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
        <div className="flex items-center justify-center shadow-md w-full">
            <LandingPrimaryVideoCtaSection
                title="Unlock the Cheat Codes"
                description="  Discover your unique numerological profile and gain deep insights into your life with an official GG33
                approved quick reading."
                autoPlay
                controls={false}
                videoPosition="right"
                videoSrc={DemoVideo}
                withBackground
                variant="secondary"
                // leadingComponent={<LandingProductHuntAward />}
            >
                <Button size="xl" variant="secondary" asChild>
                    <a href="/register">Get started</a>
                </Button>

                <Button size="xl" variant="outlineSecondary">
                    <a href="#features">Learn More</a>
                </Button>

                {/* <LandingDiscount
                    discountValueText="$50 off"
                    discountDescriptionText="for the first 20 customers (5 left)"
                /> */}

                <LandingSocialProof
                    className="max-w-full mt-12"
                    showRating
                    numberOfUsers={12000}
                    suffixText="happy users"
                    avatarItems={avatarItems}
                />
            </LandingPrimaryVideoCtaSection>
        </div>
    );
}
