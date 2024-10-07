"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define the structure of the FAQ data
interface FAQ
{
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of services including trading education, market analysis, and trading software solutions."
    },
    {
        question: "How can I contact customer support?",
        answer: "You can reach our customer support via email at support@tradingapp.com or through our live chat feature on the website."
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial for new users. You can sign up on our homepage."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers."
    },
    {
        question: "How do I cancel my subscription?",
        answer: "You can cancel your subscription anytime from your account settings or by contacting customer support."
    },
];

const FAQ: React.FC = () =>
{
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) =>
    {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-sky-600 mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="border border-sky-200 rounded-lg shadow-md overflow-hidden"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <div
                                className="bg-sky-100 cursor-pointer p-4 flex justify-between items-center"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-lg font-medium text-sky-700">{faq.question}</h3>
                                <span
                                    className={`ml-2 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                >
                                    &#9660; {/* Down arrow */}
                                </span>
                            </div>
                            <motion.div
                                className="bg-white"
                                initial={{ opacity: 0, height: 0 }}
                                animate={openIndex === index ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} // Smoother transition
                                style={{ overflow: 'hidden' }} // Ensures smooth transition
                            >
                                <p className="p-4 text-gray-700">{faq.answer}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
