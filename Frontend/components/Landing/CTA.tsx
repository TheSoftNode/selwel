"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CTA = () =>
{
    return (
        <div className="bg-gradient-to-r from-sky-500 to-sky-700 text-white py-16">
            <div className="max-w-7xl mx-auto text-center px-4">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Ready to Take Your Experience to the Next Level?
                </motion.h2>
                <p className="text-lg md:text-xl mb-6">
                    Join us today and unlock exclusive features tailored just for you.
                </p>
                <motion.button
                    className="bg-white text-sky-700 font-semibold py-3 px-6 rounded-full shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started Now
                </motion.button>
                <div className="mt-8">
                    <p className="text-sm md:text-base">No credit card required. Start your free trial today!</p>
                </div>
            </div>
        </div>
    );
};

export default CTA;
