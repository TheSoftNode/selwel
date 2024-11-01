import Link from 'next/link';
import React from 'react';

const Support = () =>
{
    return (
        <div className="px-4 sm:px-10 md:px-20 md:py-12 bg-gradient-to-br from-sky-500 to-sky-700 w-full min-h-screen flex flex-col items-center justify-center relative">

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center leading-tight md:leading-snug">
                How Can We Help You?
            </h1>

            {/* Subheading */}
            <p className="mt-4 md:mt-5 text-white text-sm sm:text-base md:text-lg text-center max-w-3xl">
                Our support team is dedicated to helping you succeed. Whether you need assistance with our platforms or have specific questions about your account, we are here to assist you with fast and reliable support.
            </p>

            {/* Call to Action Button */}
            <div className="mt-6 md:mt-8">
                <Link href="/contact">
                    <button className="bg-white hover:bg-sky-900 text-sky-700 hover:text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                        Contact Support
                    </button>
                </Link>

            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 w-20 h-20 md:w-32 md:h-32 bg-blue-200 rounded-full opacity-30"></div>
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 w-16 h-16 md:w-24 md:h-24 bg-blue-300 rounded-full opacity-20"></div>
        </div>
    );
};

export default Support;
