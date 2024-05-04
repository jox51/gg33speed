import { clsx } from "clsx";
import { LandingFeature } from "@/Components/landing/feature/LandingFeature";
import { GlowBg } from "@/Components/shared/ui/glow-bg";

/**
 * A component meant to be used on the landing page.
 * It displays a grid list of features.
 *
 * Each feature has a title, description, and icon.
 */
export const LandingFeatureList = ({
    className,
    title,
    titleComponent,
    description,
    descriptionComponent,
    featureItems,
    withBackground = false,
    withBackgroundGlow = true,
    variant = "primary",
    backgroundGlowVariant = "primary",
}) => {
    return (
        <section
            className={clsx(
                "relative w-full flex justify-center items-center dark:bg-gray-800 gap-8 py-12 lg:py-16 flex-col",
                withBackground && variant === "primary"
                    ? "bg-primary-100/20 dark:bg-primary-900/80"
                    : "",
                withBackground && variant === "secondary"
                    ? "bg-secondary-100/20 dark:bg-secondary-900/80"
                    : "",
                withBackgroundGlow ? "overflow-hidden" : "",
                "shadow-md dark:shadow-lg",
                className
            )}
        >
            {withBackgroundGlow && (
                <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-1/2">
                    <GlowBg
                        className={clsx("w-full lg:w-2/3 h-auto z-0")}
                        variant={backgroundGlowVariant}
                    />
                </div>
            )}

            <div
                className={clsx(
                    "w-full p-6 max-w-full container-wide relative z-10",
                    "text-gray-800 dark:text-gray-100"
                )}
            >
                {title ? (
                    <h2 className="text-3xl font-semibold leading-tight max-w-xs sm:max-w-none md:text-4xl lg:text-5xl fancyHeading dark:text-gray-100">
                        {title}
                    </h2>
                ) : (
                    titleComponent
                )}

                {description ? (
                    <p className="mt-6 md:text-xl dark:text-gray-300">
                        {description}
                    </p>
                ) : (
                    descriptionComponent
                )}

                <div className="mt-12 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
                    {featureItems.map((featureItem, index) => (
                        <LandingFeature
                            key={index}
                            title={featureItem.title}
                            description={featureItem.description}
                            icon={featureItem.icon}
                            variant={variant}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
