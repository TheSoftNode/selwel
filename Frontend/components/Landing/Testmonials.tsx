import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () =>
{
    return (
        <div className="bg-gradient-to-r from-sky-50 to-sky-100 w-full py-16 flex flex-col items-center justify-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-sky-600 text-center mb-12">
                Hear From Our Happy Clients
            </h2>

            {/* Testimonials Container */}
            <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12 relative">

                {/* Decorative Circle Elements for design */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-40"></div>
                <div className="absolute bottom-0 left-10 w-28 h-28 bg-blue-300 rounded-full opacity-30"></div>

                {/* Testimonial 1 */}
                <div className="p-8 bg-white rounded-3xl shadow-lg transform hover:scale-105 transition duration-300 flex flex-col items-start">
                    <FaQuoteLeft className="text-3xl text-sky-500 mb-4" />
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed italic mb-6">
                        &quot;The trading app has completely transformed the way I invest. It&rsquo;s user-friendly, efficient, and backed by great support!&quot;
                    </p>
                    <div className="flex items-center">
                        <Image
                            src="/testimonials/avatar-1.png"
                            alt="Client 1"
                            width={60}
                            height={60}
                            className="rounded-full mr-4"
                        />
                        <div>
                            <p className="text-sky-600 font-bold">Sarah Thompson</p>
                            <p className="text-sm text-gray-500">Professional Investor</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="p-8 bg-white rounded-3xl shadow-lg transform hover:scale-105 transition duration-300 flex flex-col items-start">
                    <FaQuoteLeft className="text-3xl text-sky-500 mb-4" />
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed italic mb-6">
                        &quot;I&rsquo;ve been able to grow my investments steadily. Their customer service is top-notch, always ready to assist.&quot;
                    </p>
                    <div className="flex items-center">
                        <Image
                            src="/testimonials/avatar-2.png"
                            alt="Client 2"
                            width={60}
                            height={60}
                            className="rounded-full mr-4"
                        />
                        <div>
                            <p className="text-sky-600 font-bold">James Morgan</p>
                            <p className="text-sm text-gray-500">Entrepreneur</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="p-8 bg-white rounded-3xl shadow-lg transform hover:scale-105 transition duration-300 flex flex-col items-start">
                    <FaQuoteLeft className="text-3xl text-sky-500 mb-4" />
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed italic mb-6">
                        &quot;The platform provides all the tools I need to make informed trading decisions. Highly recommended!&quot;
                    </p>
                    <div className="flex items-center">
                        <Image
                            src="/testimonials/avatar-3.png"
                            alt="Client 3"
                            width={60}
                            height={60}
                            className="rounded-full mr-4"
                        />
                        <div>
                            <p className="text-sky-600 font-bold">Emily Johnson</p>
                            <p className="text-sm text-gray-500">Financial Analyst</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
