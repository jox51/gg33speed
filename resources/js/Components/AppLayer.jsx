import { useEffect } from "react";
import ReadingDetails from "./ReadingDetails";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function AppLayer() {
    return (
        <>
            <div className="min-h-screen bg-gray-400 dark:bg-gray-700 flex justify-center items-center">
                <div className="py-10 dark:bg-gray-700">
                    <header>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:p-8 "></div>
                    </header>
                    <main>
                        <div className="flex justify-center items-center mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <ReadingDetails />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
