import clsx from "clsx";

const PricingItem = ({
    className,
    title,
    price,
    features,
    variant = "primary",
}) => {
    return (
        <div
            className={clsx(
                "flex flex-col gap-4 p-6 bg-white shadow-xl rounded-2xl",
                className
            )}
        >
            <h3
                className={clsx(
                    "text-2xl font-bold text-center",
                    variant === "primary"
                        ? "text-primary-500"
                        : "text-secondary-500"
                )}
            >
                {title}
            </h3>
            <p className="text-2xl font-semibold text-center">{price}</p>
            <ul className="flex-1 text-xl flex flex-col gap-3 mt-6">
                {features.map((feature, index) => (
                    <li key={index} className="text-gray-700">
                        {feature}
                    </li>
                ))}
            </ul>
            <button
                className={clsx(
                    "mt-2 py-3 rounded bg-primary-600 hover:bg-primary-700 text-white font-bold",
                    variant === "primary"
                        ? "bg-primary-500 hover:bg-primary-600"
                        : "bg-secondary-500 hover:bg-secondary-600"
                )}
            >
                Choose Plan
            </button>
        </div>
    );
};

export default PricingItem;
