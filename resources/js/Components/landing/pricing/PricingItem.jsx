import clsx from "clsx";
import { usePage, Link } from "@inertiajs/react";

const PricingItem = ({
    className,
    title,
    price,
    features,
    variant = "primary",
}) => {
    const { auth } = usePage().props;

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
                {auth.user ? (
                    <Link
                        as="button"
                        href="/pay"
                        className="block w-full rounded-md bg-primary-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-600"
                    >
                        Get Access
                    </Link>
                ) : (
                    <p className="mt-6 text-gray-800">
                        Please{" "}
                        <Link
                            href="/login"
                            as="button"
                            className="text-indigo-700 underline"
                        >
                            log in
                        </Link>{" "}
                        or{" "}
                        <Link
                            href="/register"
                            className="text-indigo-700 underline"
                        >
                            register
                        </Link>{" "}
                        to purchase.
                    </p>
                )}
            </button>
        </div>
    );
};

export default PricingItem;
