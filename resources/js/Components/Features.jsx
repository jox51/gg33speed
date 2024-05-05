import { Button } from "@/Components/shared/ui/button";

import { LandingProductFeature } from "@/Components/landing/LandingProductFeature";
import { LandingProductFeatureKeyPoints } from "@/Components/landing/LandingProductFeatureKeyPoints";
import FeaturesImg from "@/images/features_img.png";

export default function Features() {
    return (
        <LandingProductFeature
            title="Explore Your Numerology"
            descriptionComponent={
                <>
                    <LandingProductFeatureKeyPoints
                        keyPoints={[
                            {
                                title: "Instant Insights",
                                description:
                                    "Discover the secrets of your numerological patterns with instant analyses. Dive deep into the numbers that shape your destiny and personal journey.",
                            },
                            {
                                title: "Secure & Private",
                                description:
                                    "Your privacy is paramount. Enjoy secure access to your personal readings with top-tier encryption ensuring your data remains private.",
                            },
                            {
                                title: "Personalized Readings",
                                description:
                                    "Tailored specifically to your unique numerological profile, our readings provide personalized insights that help you navigate life's challenges.",
                            },
                            {
                                title: "Reports Emailed",
                                description:
                                    "Your readings are automatically emailed to you for easy access. Review your insights at your convenience and share them with friends and family.",
                            },
                        ]}
                    />

                    <Button className="mt-8" asChild>
                        <a href="/register">Unlock Your Secrets</a>
                    </Button>

                    <p className="text-sm">
                        Gain profound insights into your life with GG33 official
                        speed reading. Explore your horoscope and numerological
                        profile.
                    </p>
                </>
            }
            imageSrc={FeaturesImg}
            imageAlt="Screenshot of the product"
            imagePosition="left"
            imagePerspective="bottom"
        />
    );
}
