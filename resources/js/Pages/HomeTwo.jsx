import React from "react";
import Hero from "@/images/hero.jpeg";
import Navbar from "@/Components/Navbar";

export default function HomeTwo() {
    return (
        <div className="flex flex-col min-h-[100vh]">
            <Navbar />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#4B0082] to-[#8B008B] flex items-center">
                    <div className="container px-4 md:px-6 flex items-center justify-between">
                        <div className="space-y-4 text-center md:text-left">
                            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                Unlock the Secrets of the Stars
                            </h1>
                            <p className="text-lg text-gray-200 max-w-3xl">
                                Discover your destiny with our cutting-edge
                                astrology tools. Explore your horoscope, birth
                                chart, and more to gain profound insights into
                                your life.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                                <a
                                    className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-[#4B0082] shadow-lg transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4B0082]"
                                    href="#"
                                >
                                    Get Started
                                </a>
                                <a
                                    className="inline-flex h-12 items-center justify-center rounded-md bg-transparent border border-white px-6 text-sm font-medium text-white shadow-lg transition-colors hover:bg-white hover:text-[#4B0082] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4B0082]"
                                    href="#"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <img
                            alt="Astrology Image"
                            className="hidden md:block rounded-lg shadow-lg"
                            src={Hero}
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
        </div>
    );
}
