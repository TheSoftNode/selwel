"use client";

import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () =>
{
    return (
        <footer className="bg-[#004b74] text-white py-8">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-xl font-bold mb-4 md:mb-0">
                        Your Brand Name
                    </div>
                    <nav className="flex flex-col md:flex-row md:space-x-10">
                        <a href="/" className="text-gray-400 hover:text-sky-400 transition duration-200">Home</a>
                        <a href="/about" className="text-gray-400 hover:text-sky-400 transition duration-200">About</a>
                        <a href="/services" className="text-gray-400 hover:text-sky-400 transition duration-200">Services</a>
                        <a href="/contact" className="text-gray-400 hover:text-sky-400 transition duration-200">Contact</a>
                    </nav>
                </div>
                <div className="mt-6 border-t border-gray-700 pt-4">
                    <p className="text-center text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Your Brand Name. All Rights Reserved.
                    </p>
                    <div className="flex justify-center space-x-5 mt-2">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition duration-200">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition duration-200">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition duration-200">
                            <FaLinkedinIn size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition duration-200">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
