import { useEffect } from "react";
import ReadingDetails from "./ReadingDetails";
import { LandingPrimaryVideoCtaSection } from "@/Components/landing/cta/LandingPrimaryCta";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function AppLayer() {
    return (
        <>
            <div className="min-h-screen m-8 flex justify-center items-center">
                <div className="flex justify-center items-center flex-col max-w-full">
                    <header>
                        <div className="mx-auto px-4 sm:px-6 lg:p-8 "></div>
                    </header>
                    <main>
                        <div className="  sm:px-6 lg:px-8">
                            <ReadingDetails />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
