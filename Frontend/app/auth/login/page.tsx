"use client";

import { useRouter } from 'next/navigation';
import React, { useState, useEffect, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

const COUNTRIES_API_URL = "https://restcountries.com/v3.1/all";

// Validation schema using Yup
const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    country: yup.string().required("Please select your country of residence"),
    accountType: yup.string().required("Please select an account type")
});

const Login = () =>
{

    const [isLoginForm, setIsLoginForm] = useState(true);
    const [countries, setCountries] = useState<string[]>([]);
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);


    const validatePasswordStrength = (pwd: string) =>
    {
        const suggestionsArray = [];
        let strengthLevel = 0;

        // Regex checks for password conditions
        const hasUpperCase = /[A-Z]/.test(pwd);
        const hasLowerCase = /[a-z]/.test(pwd);
        const hasNumber = /\d/.test(pwd);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

        if (!hasUpperCase) suggestionsArray.push("Add at least one uppercase letter");
        if (!hasLowerCase) suggestionsArray.push("Add at least one lowercase letter");
        if (!hasNumber) suggestionsArray.push("Add at least one number");
        if (!hasSpecialChar) suggestionsArray.push("Add at least one special character");

        // Calculate the strength level
        if (hasUpperCase) strengthLevel++;
        if (hasLowerCase) strengthLevel++;
        if (hasNumber) strengthLevel++;
        if (hasSpecialChar) strengthLevel++;

        // Set strength based on score
        switch (strengthLevel)
        {
            case 0:
            case 1:
                setStrength('weak');
                break;
            case 2:
                setStrength('medium');
                break;
            case 3:
                setStrength('strong');
                break;
            case 4:
                setStrength('very strong');
                break;
            default:
                setStrength('');
        }

        setSuggestions(suggestionsArray);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const pwd = e.target.value;
        setPassword(pwd);
        validatePasswordStrength(pwd);
    };

    const getBorderColor = () =>
    {
        if (password.length === 0) return 'border-gray-300'; // Default border color
        switch (strength)
        {
            case 'weak':
                return 'border-red-500';
            case 'medium':
                return 'border-yellow-500';
            case 'strong':
                return 'border-green-500';
            case 'very strong':
                return 'border-blue-500';
            default:
                return 'border-gray-300';
        }
    };


    const router = useRouter();

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
                setCountries(countryNames.sort());
            } catch (error)
            {
                console.error("Failed to fetch countries", error);
            }
        };
        fetchCountries();
    }, []);

    // Form setup using react-hook-form with yup validation
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: any): Promise<void> =>
    {

        if (!isLoginForm)
        {
            try
            {
                const response = await fetch("http://127.0.0.1:8001/api/users/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                });
                if (response.status === 201 || response.status === 200)
                {
                    toast.success("Welcome. Please login.");
                    reset();
                    setIsLoginForm(true);
                } else
                {
                    const resData = await response.json();
                    if (!resData.email)
                    {
                        toast.error("There was an error with your request. Please try again.")
                    }
                    toast.error(resData.email[0].message)
                }
            } catch (error)
            {
                toast.error("An error occurred. Please try again.");
            }
        }
    };

    const toggleLoginForm = () =>
    {
        setIsLoginForm(!isLoginForm);
    };

    
    return (
        <div className="flex items-start pt-10 justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg p-8 rounded-lg w-11/12 sm:w-96 transition-transform transform hover:scale-105">
                <h1 className="font-extrabold text-2xl text-center text-sky-700 mb-6">
                    {isLoginForm ? "Welcome, Please sign in." : "Registration"}
                </h1>

                {!isLoginForm && (
                    <>
                        {/* Country of Residence Dropdown */}
                        <label className="block text-gray-700 mb-3">
                            Country of Residence <span className="text-sky-600">*</span>
                            <select
                                {...register("country")}
                                className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in-out"
                            >
                                <option value="">Select Country of Residence</option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                            {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
                        </label>

                        {/* Account Type Dropdown */}
                        <label className="block text-gray-700 mb-3">
                            Account Type <span className="text-sky-600">*</span>
                            <select
                                {...register("accountType")}
                                className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in-out"
                            >
                                <option value="">Select Account Type</option>
                                <option value="Individual">Individual</option>
                                <option value="Business">Business</option>
                            </select>
                            {errors.accountType && <p className="text-red-500 text-sm">{errors.accountType.message}</p>}
                        </label>
                    </>
                )}

                <label className="block text-gray-700 mb-3">
                    Email <span className="text-sky-600">*</span>
                    <input
                        type="email"
                        {...register("email")}
                        placeholder="Email Address"
                        className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in-out"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </label>

                <label className="block text-gray-700 mb-3">
                    Password <span className="text-sky-600">*</span>
                    <input
                        type="password"
                        {...register("password")}
                        onChange={handlePasswordChange}
                        name='password'
                        required
                        value={password}
                        placeholder="Password"
                        className={`p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none transition duration-200 ease-in-out border-b-4 ${getBorderColor()}`}
                    />

                    {/* Password strength message */}
                    {password.length > 0 && (
                        <p className={`text-sm mt-1 ${strength === 'weak' ? 'text-red-500' : strength === 'medium' ? 'text-yellow-500' : strength === 'strong' ? 'text-green-500' : 'text-blue-500'}`}>
                            {strength.charAt(0).toUpperCase() + strength.slice(1)} password
                        </p>
                    )}

                    {/* Suggestions */}
                    {suggestions.length > 0 && (
                        <ul className="mt-2 text-sm text-gray-600">
                            {suggestions.map((suggestion, index) => (
                                <li key={index}>• {suggestion}</li>
                            ))}
                        </ul>
                    )}
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </label>



                <button
                    type="submit"
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

