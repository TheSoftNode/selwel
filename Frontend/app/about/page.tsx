// "use client"

// import Team from '@/components/Landing/Team';
// import React from 'react';

// const About = () =>
// {
//     return (
//         <>
//             <div className="px-6 sm:px-12 md:px-20 py-16 bg-gradient-to-br from-sky-500 to-sky-700 w-full flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto">

//                 {/* Text Section */}
//                 <div className="md:basis-[55%] text-center md:text-left mb-8 md:mb-0">
//                     <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold leading-snug">
//                         About Us
//                     </h1>
//                     <p className="text-white text-base sm:text-lg lg:text-xl mt-6">
//                         <span className="font-bold">SelWel</span> is a global multi-asset fintech group operating proprietary technology-based trading platforms.
//                     </p>
//                 </div>

//                 {/* Image Section */}
//                 <div className="md:basis-[45%] flex justify-center md:justify-end">
//                     <img
//                         className="w-96 h-[400px] object-cover shadow-lg rounded-lg"
//                         src="/about/Aboutus.png"
//                         alt="About Us Image"
//                     />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default About;

import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Globe, Target, Shield, TrendingUp, Users } from 'lucide-react';
import Team from '@/components/Landing/Team';

// Define types for our data structures
interface ValueProp
{
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface Milestone
{
    number: string;
    title: string;
    description: string;
}

// Metadata for the page
export const metadata: Metadata = {
    title: 'About SelWel - Global Fintech Trading Platform',
    description: 'Discover SelWel, a global multi-asset fintech group pioneering innovative trading platforms that empower investors worldwide.',
    openGraph: {
        title: 'About SelWel',
        description: 'Transforming financial technology with advanced trading platforms',
        images: [{ url: '/about/Aboutus.png' }]
    }
};

const AboutPage: React.FC = () =>
{
    const valueProps: ValueProp[] = [
        {
            icon: <Globe className="w-12 h-12 text-sky-500" />,
            title: "Global Reach",
            description: "Connecting traders across continents with cutting-edge financial technology."
        },
        {
            icon: <Target className="w-12 h-12 text-emerald-500" />,
            title: "Precision Trading",
            description: "Advanced algorithms and real-time data to optimize your investment strategy."
        },
        {
            icon: <Shield className="w-12 h-12 text-blue-600" />,
            title: "Robust Security",
            description: "State-of-the-art security protocols protecting your assets and personal information."
        }
    ];

    const milestones: Milestone[] = [
        { number: "2018", title: "Company Founded", description: "Pioneering our vision in financial technology" },
        { number: "50+", title: "Global Markets", description: "Trading platforms across multiple asset classes" },
        { number: "100K+", title: "Active Traders", description: "Growing community of global investors" }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="px-6 sm:px-12 md:px-20 py-16 bg-gradient-to-br from-sky-500 to-sky-700 w-full flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto">
                {/* Text Section */}
                <div className="md:basis-[55%] text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold leading-snug">
                        Transforming Financial Technology
                    </h1>
                    <p className="text-white text-base sm:text-lg lg:text-xl mt-6">
                        <span className="font-bold">SelWel</span> is a global multi-asset fintech group pioneering innovative trading platforms that empower investors worldwide.
                    </p>
                    <div className="mt-8 flex space-x-4 justify-center md:justify-start">
                        <a
                            href="/platforms"
                            className="px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg shadow-md hover:bg-sky-50 transition duration-300"
                        >
                            Explore Platforms
                        </a>
                        <a
                            href="/contact"
                            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/20 transition duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:basis-[45%] flex justify-center md:justify-end">
                    <div className="relative w-96 h-[400px]">
                        <Image
                            src="/about/Aboutus.png"
                            alt="About Us Image"
                            fill
                            className="object-cover shadow-2xl rounded-2xl transform transition duration-500 hover:scale-105"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>
            </div>

            {/* Value Propositions */}
            <div className="py-16 px-6 bg-gray-50">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Why Choose SelWel?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {valueProps.map((prop, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    {prop.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-gray-800">{prop.title}</h3>
                                <p className="text-gray-600">{prop.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Milestones */}
            <div className="py-16 px-6 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Our Journey in Numbers
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className="text-center p-6 bg-sky-50 rounded-xl hover:bg-sky-100 transition duration-300"
                            >
                                <div className="text-5xl font-extrabold text-sky-600 mb-4">
                                    {milestone.number}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {milestone.title}
                                </h3>
                                <p className="text-gray-600">{milestone.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trading Platforms Section */}
            {/* <div className="py-16 px-6 sm:px-12 bg-gray-50">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                                Invest with Our Trading App
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Our comprehensive range of diverse trading platforms is built to suit your unique objectives, empowering you to select the perfect platform for your individual goals and experience level.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center">
                                    <TrendingUp className="mr-4 text-emerald-500" />
                                    <span>Tailored for Beginners and Professional Traders</span>
                                </li>
                                <li className="flex items-center">
                                    <Users className="mr-4 text-sky-500" />
                                    <span>Intuitive User Experience</span>
                                </li>
                            </ul>
                            <a
                                href="/platforms"
                                className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 transition duration-300"
                            >
                                Explore Platforms
                            </a>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative w-full aspect-video">
                                <Image
                                    src="/about/trading.png"
                                    alt="Trading Platforms"
                                    fill
                                    className="rounded-xl shadow-2xl transform transition duration-500 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="py-16 px-6 sm:px-12 bg-gray-50">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">
                                Invest with Our Trading App
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Our comprehensive range of diverse trading platforms is built to suit your unique objectives, empowering you to select the perfect platform for your individual goals and experience level.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center">
                                    <svg className="mr-4 text-emerald-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 017 12V7z" />
                                    </svg>
                                    <span className="font-medium">Tailored for Beginners and Professional Traders</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="mr-4 text-sky-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <span className="font-medium">Intuitive User Experience</span>
                                </li>
                            </ul>
                            <a
                                href="/platforms"
                                className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 transition duration-300"
                            >
                                Explore Platforms
                            </a>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative w-full aspect-video">
                                <Image
                                    src="/about/trading.png"
                                    alt="Trading Platforms"
                                    fill
                                    className="rounded-xl shadow-2xl transform transition duration-500 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
