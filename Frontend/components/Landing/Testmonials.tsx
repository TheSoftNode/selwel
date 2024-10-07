
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
                        "The trading app has completely transformed the way I invest. It’s user-friendly, efficient, and backed by great support!"
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
                        "I’ve been able to grow my investments steadily. Their customer service is top-notch, always ready to assist."
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
                        "The platform provides all the tools I need to make informed trading decisions. Highly recommended!"
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




// "use client";

// import React from 'react';
// import Image from 'next/image';
// import { FaQuoteLeft } from 'react-icons/fa';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; // Add this
// import "slick-carousel/slick/slick-theme.css"; // And this

// const testimonialsData = [
//     {
//         quote: "The trading app has completely transformed the way I invest. It’s user-friendly, efficient, and backed by great support!",
//         name: "Sarah Thompson",
//         title: "Professional Investor",
//         avatar: "/testimonials/avatar-1.png"
//     },
//     {
//         quote: "I’ve been able to grow my investments steadily. Their customer service is top-notch, always ready to assist.",
//         name: "James Morgan",
//         title: "Entrepreneur",
//         avatar: "/testimonials/avatar-2.png"
//     },
//     {
//         quote: "The platform provides all the tools I need to make informed trading decisions. Highly recommended!",
//         name: "Emily Johnson",
//         title: "Financial Analyst",
//         avatar: "/testimonials/avatar-3.png"
//     },
//     {
//         quote: "An amazing experience! I love how intuitive the platform is and how quickly I can execute trades.",
//         name: "Michael Brown",
//         title: "Day Trader",
//         avatar: "/testimonials/avatar-4.png"
//     },
//     {
//         quote: "Fantastic customer support! They always help me resolve any issues I encounter.",
//         name: "Jessica White",
//         title: "Retired Investor",
//         avatar: "/testimonials/avatar-5.png"
//     },
// ];

// const Testimonials = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3, // Change this value for mobile
//         slidesToScroll: 1,
//         arrows: true,
//         responsive: [
//             {
//                 breakpoint: 768, // For tablets
//                 settings: {
//                     slidesToShow: 2, // Show 2 testimonials on medium screens
//                 },
//             },
//             {
//                 breakpoint: 1024, // For laptops and desktops
//                 settings: {
//                     slidesToShow: 3, // Show 3 testimonials on larger screens
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="bg-gradient-to-r from-sky-50 to-sky-100 w-full py-16 flex flex-col items-center justify-center">
//             <h2 className="text-3xl md:text-5xl font-extrabold text-sky-600 text-center mb-12">
//                 Hear From Our Happy Clients
//             </h2>

//             <Slider {...settings} className="max-w-7xl w-full px-6 md:px-12">
//                 {testimonialsData.map((testimonial, index) => (
//                     <div key={index} className="p-8 bg-white rounded-3xl shadow-lg flex flex-col items-start">
//                         <FaQuoteLeft className="text-3xl text-sky-500 mb-4" />
//                         <p className="text-gray-700 text-base md:text-lg leading-relaxed italic mb-6">
//                             "{testimonial.quote}"
//                         </p>
//                         <div className="flex items-center">
//                             <Image
//                                 src={testimonial.avatar}
//                                 alt={`Client ${index + 1}`}
//                                 width={60}
//                                 height={60}
//                                 className="rounded-full mr-4"
//                             />
//                             <div>
//                                 <p className="text-sky-600 font-bold">{testimonial.name}</p>
//                                 <p className="text-sm text-gray-500">{testimonial.title}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default Testimonials;

