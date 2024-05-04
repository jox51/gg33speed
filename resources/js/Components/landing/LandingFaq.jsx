import { clsx } from "clsx";
import { GlowBg } from "@/Components/shared/ui/glow-bg";

/**
 * A component meant to be used in the landing page.
 * It displays a list of frequently asked questions and their answers.
 */
export const LandingFaqSection = ({
    className,
    title,
    titleComponent,
    description,
    descriptionComponent,
    faqItems,
    withBackground = false,
    withBackgroundGlow = false,
    variant = "primary",
    backgroundGlowVariant = "primary",
}) => {
    return (
        <section
            className={clsx(
                "relative w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16 dark:text-slate-200",
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

            <div
                className={clsx(
                    className,
                    "w-full p-6 max-w-full container-wide"
                )}
            >
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

                <ul
                    className={clsx(
                        "grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-12 lg:mt-16 faq",
                        className
                    )}
                >
                    {faqItems.map((faqItem, index) => (
                        <li key={index}>
                            <h3>{faqItem.question}</h3>
                            <p>{faqItem.answer}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
