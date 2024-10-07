import React from 'react';
import { FaMobileAlt, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const KeyFeatures = () => {
    return (
        <div className="bg-white w-full py-12 flex flex-col items-center">
            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-sky-600 mb-8 text-center">
                Why Choose Our Trading App?
            </h2>

            {/* Features Grid */}
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
                
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center bg-sky-50 p-6 rounded-lg shadow-md">
                    <FaMobileAlt className="text-4xl text-sky-500 mb-4" />
                    <h3 className="text-lg font-bold text-sky-700 mb-2">User-Friendly Interface</h3>
                    <p className="text-sm text-gray-700">
                        Our platform is easy to navigate and designed for both beginners and advanced traders, offering a seamless experience.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center bg-sky-50 p-6 rounded-lg shadow-md">
                    <FaShieldAlt className="text-4xl text-sky-500 mb-4" />
                    <h3 className="text-lg font-bold text-sky-700 mb-2">Advanced Security</h3>
                    <p className="text-sm text-gray-700">
                        We prioritize your security with top-level encryption, ensuring your data and funds are protected at all times.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center bg-sky-50 p-6 rounded-lg shadow-md">
                    <FaChartLine className="text-4xl text-sky-500 mb-4" />
                    <h3 className="text-lg font-bold text-sky-700 mb-2">Real-Time Market Data</h3>
                    <p className="text-sm text-gray-700">
                        Get real-time updates and data on your investments to help you make informed decisions when it matters most.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KeyFeatures;
