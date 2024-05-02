import { Link, Head } from "@inertiajs/react";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Features from "@/Components/Features";
import Pricing from "@/Components/Pricing";
import { GTMProvider } from "@elgorditosalsero/react-gtm-hook";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const gtmParams = { id: "GTM-KH9XT38H" };

    return (
        <>
            <GTMProvider state={gtmParams}>
                <Head title="Welcome" />

                <Hero />

                <Features />

                <Pricing />
            </GTMProvider>
        </>
    );
}
