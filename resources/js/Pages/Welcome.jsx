import { Link, Head } from "@inertiajs/react";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Features from "@/Components/Features";
import Pricing from "@/Components/Pricing";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />

            <Hero />

            <Features />

            <Pricing />
        </>
    );
}
