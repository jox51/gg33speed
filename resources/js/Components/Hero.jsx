import React from "react";
import HeroImg from "@/images/hero.jpeg";

const Hero = () => {
    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-slate-300 to-slate-600 dark:bg-gradient-to-r dark:from-gray-500 dark:to-gray-800 flex items-center">
                <div className="container px-4 md:px-6 flex items-center justify-between">
                    <div className="space-y-4 text-center md:text-left">
                        <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl md:text-6xl lg:text-7xl">
                            Unlock the Cheat Codes
                        </h1>
                        <p className="text-lg text-gray-800  max-w-3xl">
                            Discover your unique numerological profile and gain
                            deep insights into your life with an official GG33
                            approved quick reading.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-gray-800  shadow-lg transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-500"
                                href="#pricing"
                            >
                                Get Started
                            </a>
                            <a
                                className="inline-flex h-12 items-center justify-center rounded-md bg-transparent border border-white px-6 text-sm font-medium text-white shadow-lg transition-colors hover:bg-white hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-500"
                                href="#features"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <img
                        alt="Astrology Image"
                        className="hidden md:block rounded-lg shadow-lg"
                        src={HeroImg}
                        style={{
                            aspectRatio: "500/500",
                            objectFit: "cover",
                        }}
                        width={500}
                        height={500}
                    />
                </div>
            </section>
        </main>
    );
};

export default Hero;
