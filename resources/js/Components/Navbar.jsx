import { useState, useEffect } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import {
    Bars3Icon,
    XMarkIcon,
    MoonIcon,
    SunIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "@/Components/Dropdown";
// import Logo from "@/assets/logo.png";
import Logo from "@/images/logo.png";
import { useThemeStore } from "@/store/themeStore";

export default function Navbar() {
    // const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { auth } = usePage().props;
    const navigation = getNavigation(!!auth.user);
    // Zustand store for managing dark mode
    const { darkMode, toggleDarkMode } = useThemeStore();
    // Effect to toggle dark class on html element based on Zustand store's state
    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    // Save preference to localStorage
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    function getNavigation(authenticated) {
        if (authenticated) {
            return [
                { name: "Reading", href: "/reading" },
                { name: "Features", href: "#features" },
                { name: "About Me", href: "/about" },
            ];
        } else {
            return [
                // { name: "Reading", href: "/reading" },
                { name: "Features", href: "#features" },
                { name: "About Us", href: "/about" },
            ];
        }
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <Disclosure as="nav" className="w-full dark:bg-gray-900">
            {({ open }) => (
                <>
                    <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex-shrink-0">
                                <Link href="/">
                                    <img
                                        className="h-8 w-auto"
                                        src={Logo}
                                        alt="Your Company Logo"
                                    />
                                </Link>
                            </div>
                            <div className="sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:text-gray-200 dark:hover:bg-gray-700">
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden sm:flex sm:items-center sm:justify-center flex-1">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "bg-gray-900 text-white dark:bg-gray-700 dark:text-gray-200"
                                                    : "text-gray-900 hover:bg-gray-700 hover:text-white dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
                                                "px-3 py-2 rounded-md text-sm font-medium"
                                            )}
                                            aria-current={
                                                item.current
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* Authentication Links */}
                            <div className="flex items-center">
                                {auth.user ? (
                                    <div className="hidden sm:flex sm:items-center">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-900 bg-slate-100 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150 dark:text-gray-200 dark:bg-gray-800 dark:hover:text-white"
                                        >
                                            {auth.user.name}
                                            {/* User dropdown logic here */}
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="hidden sm:flex rounded-md mx-2 px-3 py-2 text-gray-900 hover:bg-gray-700 hover:text-white transition ease-in-out duration-150 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="hidden sm:flex rounded-md px-3 py-2 text-gray-900 hover:bg-gray-700 hover:text-white transition ease-in-out duration-150 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>

                            {/* DARK MODE TOGGLE */}
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-700"
                            >
                                {darkMode ? (
                                    <SunIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                                ) : (
                                    <MoonIcon className="h-6 w-6 text-gray-400 dark:text-gray-800" />
                                )}
                            </button>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as={Link}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                        "block px-3 py-2 rounded-md text-base font-medium"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
