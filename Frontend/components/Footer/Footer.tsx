"use client";

import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () =>
{
    return (
        <footer className="bg-[#004b74] text-white py-8">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-xl font-bold mb-4 md:mb-0">
                        Selwel
                    </div>
                    <nav className="flex flex-col md:flex-row md:space-x-10">
                        <a href="/" className="text-gray-400 hover:text-sky-400 transition duration-200">Home</a>
                        <a href="/market" className="text-gray-400 hover:text-sky-400 transition duration-200">Market</a>
                        <a href="/about" className="text-gray-400 hover:text-sky-400 transition duration-200">Company</a>
                        <a href="/support" className="text-gray-400 hover:text-sky-400 transition duration-200">Support</a>
                    </nav>
                </div>
                <div className="mt-6 border-t border-gray-700 pt-4">
                    <p className="text-center text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Selwel. All Rights Reserved.
                    </p>
                    <div className="flex justify-center space-x-5 mt-2">
                        <a href="https://www.f6s.com/company/hitoai.ai" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition duration-200">
                        <img src={"/footer/f6s-2.png"} alt="F6s" className="h-7 w-7 mx-2" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition duration-200">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="https://www.linkedin.com/company/104212483/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition duration-200">
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
