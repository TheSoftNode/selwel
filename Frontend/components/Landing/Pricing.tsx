"use client";

import React from 'react';

const pricingPlans = [
    {
        name: "Basic",
        price: "$19/month",
        features: [
            "Access to basic features",
            "Community support",
            "Limited storage",
            "Email notifications",
        ],
        buttonLabel: "Get Started",
        isRecommended: false,
    },
    {
        name: "Pro",
        price: "$49/month",
        features: [
            "All Basic features",
            "Priority support",
            "Increased storage",
            "Custom dashboards",
        ],
        buttonLabel: "Get Started",
        isRecommended: true, // Marking this plan as recommended
    },
    {
        name: "Enterprise",
        price: "$99/month",
        features: [
            "All Pro features",
            "Dedicated account manager",
            "Custom solutions",
            "Onboarding assistance",
        ],
        buttonLabel: "Contact Sales",
        isRecommended: false,
    },
];

const Pricing = () =>
{
    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center text-sky-600 mb-12">
                    Choose Your Plan
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className={`bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 transform hover:scale-105 ${plan.isRecommended ? "border-4 border-sky-600" : ""}`}>
                            {plan.isRecommended && (
                                <div className="absolute top-0 right-0 bg-sky-600 text-white px-3 py-1 rounded-bl-lg">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                            <p className="text-xl font-semibold text-gray-900 mb-4">{plan.price}</p>
                            <ul className="list-disc list-inside mb-6 text-left">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="text-gray-600">{feature}</li>
                                ))}
                            </ul>
                            <button className="bg-sky-600 text-white py-3 px-6 rounded-lg hover:bg-sky-700 transition duration-200 w-full">
                                {plan.buttonLabel}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
