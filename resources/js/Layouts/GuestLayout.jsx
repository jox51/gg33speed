import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Logo from "@/images/logo.png";

export default function Guest({ children }) {
    return (
        <div className="h-screen w-full flex flex-col sm:justify-center items-center pt-6 sm:pt-0 ">
            <Link href="/">
                <img
                    className="h-8 w-auto"
                    src={Logo}
                    alt="Your Company Logo"
                />
            </Link>

            <div className=" sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
