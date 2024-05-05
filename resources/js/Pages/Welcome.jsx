import { Link, Head } from "@inertiajs/react";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Features from "@/Components/Features";
import Pricing from "@/Components/Pricing";
import PreFeatures from "@/Components/PreFeatures";
import Testimonials from "@/Components/Testimonials";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <div className="flex flex-col gap-4">
            <Head title="Welcome" />

            <Hero />

            <PreFeatures />

            <Features />

            <Testimonials />

            <Pricing />
        </div>
    );
}
