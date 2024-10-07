"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Sample team data
const teamMembers = [
    {
        name: "Alice Johnson",
        role: "CEO",
        avatar: "/about/team.png",
        description: "Alice is a visionary leader with over 10 years of experience in the industry."
    },
    {
        name: "Bob Smith",
        role: "CTO",
        avatar: "/about/team.png",
        description: "Bob is a tech enthusiast who leads our development team."
    },
    {
        name: "Charlie Davis",
        role: "Designer",
        avatar: "/about/team.png",
        description: "Charlie crafts beautiful user experiences and interfaces."
    },
    {
        name: "Dana Lee",
        role: "Marketing Manager",
        avatar: "/about/team.png",
        description: "Dana drives our marketing strategies and client relations."
    },
    {
        name: "Eve Carter",
        role: "Product Manager",
        avatar: "/about/team.png",
        description: "Eve ensures our products meet market needs and customer expectations."
    },
];

const Team = () =>
{
    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center text-sky-600 mb-12">
                    Meet Our Team
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.role}</p>
                                <p className="mt-2 text-gray-600">{member.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
