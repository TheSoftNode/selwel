"use client";

import React, { useState, useEffect, FormEvent } from 'react';
import { toast } from 'react-toastify';

const USER_API_URL = "/api/users/";
const COUNTRIES_API_URL = "https://restcountries.com/v3.1/all";

const Login = () =>
{
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [countries, setCountries] = useState<string[]>([]);
    const [message, setMessage] = useState<string>("");
    const [errors, setErrors] = useState<Record<string, any>>({});
    const [error, setError] = useState<string>("");

    // Fetch countries from external API
    useEffect(() =>
    {
        const fetchCountries = async () =>
        {
            try
            {
                const response = await fetch(COUNTRIES_API_URL);
                const data = await response.json();
                const countryNames = data.map((country: any) => country.name.common);
                setCountries(countryNames.sort()); // Sort alphabetically
            } catch (error)
            {
                console.error("Failed to fetch countries", error);
            }
        };

        fetchCountries();
    }, []);

    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void>
    {
        event.preventDefault();
        setMessage("");
        setErrors({});
        setError("");

        const formData = new FormData(event.currentTarget);
        const objectFromForm = Object.fromEntries(formData.entries());
        const jsonData = JSON.stringify(objectFromForm);

        const requestOptions: RequestInit = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: jsonData,
        };

        try
        {
            const response = await fetch(USER_API_URL, requestOptions);
            if (response.status === 201 || response.status === 200)
            {
                toast.success("Welcome. Do well to login");
            } else
            {
                const data = await response.json();
                setErrors(data);
                if (!data.email)
                {
                    setError("There was an error with your request. Please try again.");
                }
            }
        } catch (e: any)
        {
            toast.error(e.message);
            setError("An error occurred while processing your request.");
        }
    }

    const toggleLoginForm = () =>
    {
        setIsLoginForm(!isLoginForm);
    };

    return (
        <div className="flex items-start pt-10 justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded-lg w-11/12 sm:w-96 transition-transform transform hover:scale-105">
                <h1 className="font-extrabold text-2xl text-center text-sky-700 mb-6">
                    {isLoginForm ? "Welcome, Please sign in." : "Registration"}
                </h1>

                {/* Conditional Fields for Registration */}
                {!isLoginForm && (
                    <>
                        {/* Country of Residence Dropdown */}
                        <select
                            name="country"
                            className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in-out"
                            required
                        >
                            <option value="">Select Country of Residence</option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>

                        {/* Account Type Dropdown */}
                        <select
                            name="accountType"
                            className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in-out"
                            required
                        >
                            <option value="">Select Account Type</option>
                            <option value="Individual">Individual</option>
                            <option value="Business">Business</option>
                        </select>
                    </>
                )}

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in-out"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in-out"
                    required
                />

                <button
                    className="p-3 my-6 bg-sky-600 text-white w-full font-bold rounded-lg hover:bg-sky-700 transition duration-200 ease-in-out"
                >
                    {isLoginForm ? "Sign In" : "Open an Account"}
                </button>

                <p className="text-center cursor-pointer text-gray-600" onClick={toggleLoginForm}>
                    {isLoginForm ? (
                        <span>Not registered yet? <span className="text-sky-600 hover:underline">Click here to Register</span></span>
                    ) : (
                        <span>Already registered? <span className="text-sky-600 hover:underline">Sign in Now</span></span>
                    )}
                </p>
            </form>
        </div>
    );
};

export default Login;
