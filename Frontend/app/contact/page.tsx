"use client"

import React, { useState } from 'react';
import
    {
        Mail,
        Phone,
        MapPin,
        Send,
        User,
        MessageCircle
    } from 'lucide-react';
import { Metadata } from 'next';
import { z } from 'zod';

// Form Validation Schema
const ContactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string()
        .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            { message: "Invalid phone number" })
        .optional(),
    message: z.string()
        .min(10, { message: "Message must be at least 10 characters" })
        .max(500, { message: "Message cannot exceed 500 characters" })
});

type ContactFormData = z.infer<typeof ContactSchema>;

const ContactPage: React.FC = () =>
{
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState<Partial<ContactFormData>>({});
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) =>
    {
        e.preventDefault();

        try
        {
            // Validate form data
            const validatedData = ContactSchema.parse(formData);

            setSubmitStatus('submitting');

            // Simulated API call - replace with actual submission logic
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(validatedData)
            });

            if (response.ok)
            {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else
            {
                setSubmitStatus('error');
            }
        } catch (error)
        {
            if (error instanceof z.ZodError)
            {
                // Handle validation errors
                const errorMap = error.flatten().fieldErrors;
                setFormErrors(errorMap);
            }
            setSubmitStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-16 lg:px-20">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-sky-700">
                        Contact SelWel
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions or want to explore partnership opportunities?
                        Our global team is ready to assist you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 bg-white shadow-2xl rounded-2xl overflow-hidden">
                    {/* Contact Information Section */}
                    <div className="bg-gradient-to-br from-sky-500 to-sky-700 p-12 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <Mail className="mr-4 w-6 h-6" />
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <a
                                            href="mailto:support@selwel.com"
                                            className="hover:underline"
                                        >
                                            info@hitoai.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <Phone className="mr-4 w-6 h-6" />
                                    <div>
                                        <p className="font-semibold">Phone</p>
                                        <span>+353 89 983 2147</span>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <MapPin className="mr-4 w-6 h-6" />
                                    <div>
                                        <p className="font-semibold">Address</p>
                                        <span>HITOAI Limited Sandyford, Dublin 18 Dublin, Ireland</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-white/20 pt-6">
                            <p className="text-sm">
                                Our support team is available 24/7 to assist you.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className={`
                      w-full pl-10 pr-4 py-3 border rounded-lg 
                      focus:outline-none focus:ring-2 focus:border-transparent
                      ${formErrors.name ? 'border-red-500' : 'border-gray-300'}
                    `}
                                    />
                                </div>
                                {formErrors.name && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {formErrors.name[0]}
                                    </p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className={`
                      w-full pl-10 pr-4 py-3 border rounded-lg 
                      focus:outline-none focus:ring-2 focus:border-transparent
                      ${formErrors.email ? 'border-red-500' : 'border-gray-300'}
                    `}
                                    />
                                </div>
                                {formErrors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {formErrors.email[0]}
                                    </p>
                                )}
                            </div>

                            {/* Phone Input (Optional) */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Phone Number (Optional)
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (123) 456-7890"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
                                    />
                                </div>
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 font-semibold mb-2"
                                >
                                    Your Message
                                </label>
                                <div className="relative">
                                    <MessageCircle className="absolute left-3 top-4 text-gray-400" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Write your message here..."
                                        className={`
                      w-full pl-10 pr-4 py-3 border rounded-lg resize-none
                      focus:outline-none focus:ring-2 focus:border-transparent
                      ${formErrors.message ? 'border-red-500' : 'border-gray-300'}
                    `}
                                    />
                                </div>
                                {formErrors.message && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {formErrors.message[0]}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={submitStatus === 'submitting'}
                                className={`
                  w-full py-3 rounded-lg text-white font-semibold 
                  flex items-center justify-center space-x-2
                  ${submitStatus === 'submitting'
                                        ? 'bg-sky-400 cursor-not-allowed'
                                        : 'bg-sky-600 hover:bg-sky-700'}
                `}
                            >
                                {submitStatus === 'submitting' ? (
                                    <>
                                        <svg
                                            className="animate-spin h-5 w-5 mr-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2" />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {/* Form Submission Status */}
                            {submitStatus === 'success' && (
                                <div className="mt-4 text-center text-green-600">
                                    Message sent successfully! We'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="mt-4 text-center text-red-600">
                                    Failed to send message. Please try again later.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;