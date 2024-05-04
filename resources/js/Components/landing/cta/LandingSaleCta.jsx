import clsx from "clsx";
import { Button } from "@/Components/shared/ui/button";
import { GlowBg } from "@/Components/shared/ui/glow-bg";

/**
 * A component meant to be used in the landing page.
 *
 * A simple section that shows a selling point and call to action button.
 */
export const LandingSaleCtaSection = ({
    children,
    className,
    title,
    titleComponent,
    description,
    descriptionComponent,
    footerComponent,
    ctaHref = "#",
    ctaLabel,
    secondaryCtaHref = "#",
    secondaryCtaLabel,
    withBackground = false,
    withBackgroundGlow = false,
    variant = "primary",
    backgroundGlowVariant = "primary",
}) => {
    return (
        <section
            className={clsx(
                "relative w-full flex flex-col justify-center items-center shadow-md gap-8 py-12 lg:py-16 dark:bg-gray-800 dark:text-slate-200",
                withBackground && variant === "primary"
                    ? "bg-primary-100/20 dark:bg-primary-900/10"
                    : "",
                withBackground && variant === "secondary"
                    ? "bg-secondary-100/20 dark:bg-secondary-900/10"
                    : "",
                withBackgroundGlow ? "overflow-hidden" : "",
                className
            )}
        >
            {withBackgroundGlow ? (
                <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-1/2 pointer-events-none">
                    <GlowBg
                        className={clsx("w-full lg:w-2/3 h-auto z-0")}
                        variant={backgroundGlowVariant}
                    />
                </div>
            ) : null}

            <div className={clsx(className, "w-full p-6 container-narrow")}>
                {title ? (
                    <h2 className="text-3xl font-semibold leading-tight max-w-xs sm:max-w-none md:text-4xl lg:text-5xl fancyHeading">
                        {title}
                    </h2>
                ) : (
                    titleComponent
                )}

                {description ? (
                    <p className="mt-6 md:text-xl">{description}</p>
                ) : (
                    descriptionComponent
                )}

                <div className="mt-6 flex flex-wrap gap-4 w-full items-center">
                    {ctaLabel ? (
                        <Button
                            size="xl"
                            asChild
                            variant={variant}
                            className="shrink-0"
                        >
                            <a
                                href={ctaHref}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {ctaLabel}
                            </a>
                        </Button>
                    ) : null}

                    {secondaryCtaLabel ? (
                        <Button
                            className="shrink-0"
                            size="xl"
                            asChild
                            variant={
                                variant === "primary"
                                    ? "outlinePrimary"
                                    : "outlineSecondary"
                            }
                        >
                            <a
                                href={secondaryCtaHref}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {secondaryCtaLabel}
                            </a>
                        </Button>
                    ) : null}

                    {children}
                </div>

                {footerComponent}
            </div>
        </section>
    );
};
