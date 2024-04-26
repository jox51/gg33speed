import { Link } from "@inertiajs/react";

export default function Footer() {
    const navigation = [
        {
            name: "Terms of Service",
            href: "#",
        },
        {
            name: "Privacy Policy",
            href: "#",
        },
        {
            name: "Contact Us",
            href: "#",
        },
    ];

    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-r from-slate-500 to-slate-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-800 text-white">
            <p className="text-xs">
                © 2024 GG33 AutoRead. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-xs font-medium hover:underline underline-offset-2 hover:text-gray-300 dark:hover:text-gray-100"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </footer>
    );
}
