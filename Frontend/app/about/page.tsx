"use client"

import Team from '@/components/Landing/Team';
import React from 'react';

const About = () =>
{
    return (
        <>
            <div className="px-6 sm:px-12 md:px-20 py-16 bg-gradient-to-br from-sky-500 to-sky-700 w-full flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto">

                {/* Text Section */}
                <div className="md:basis-[55%] text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold leading-snug">
                        About Us
                    </h1>
                    <p className="text-white text-base sm:text-lg lg:text-xl mt-6">
                        <span className="font-bold">SelWel</span> is a global multi-asset fintech group operating proprietary technology-based trading platforms.
                    </p>
                </div>

                {/* Image Section */}
                <div className="md:basis-[45%] flex justify-center md:justify-end">
                    <img
                        className="w-96 h-[400px] object-cover shadow-lg rounded-lg"
                        src="/about/Aboutus.png"
                        alt="About Us Image"
                    />
                </div>
            </div>
            <Team />
        </>
    );
}

export default About;
