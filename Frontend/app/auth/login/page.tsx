"use client";

import React, { useState } from 'react';

const Login = () =>
{
    const [isLoginForm, setIsLoginForm] = useState(true);

    const toggleLoginForm = () =>
    {
        setIsLoginForm(!isLoginForm);
    };

    return (
        <div className='flex items-start  pt-10 justify-center min-h-screen bg-gray-100'>
            <form className="bg-white shadow-md p-8 rounded-lg w-11/12 sm:w-96 transition-transform transform hover:scale-105">
                <h1 className="font-extrabold text-2xl text-center text-sky-700 mb-6">
                    {isLoginForm ? "Welcome, Please sign in." : "Registration"}
                </h1>

                {/* Conditional Fields for Registration */}
                {!isLoginForm && (
                    <>
                        <input
                            type="text"
                            name='country'
                            placeholder="Country of Residence"
                            className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                        <input
                            type="text"
                            name='accountType'
                            placeholder="Type of Account"
                            className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </>
                )}

                <input
                    type="email"
                    name='email'
                    placeholder="Email Address"
                    className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    required
                />

                <input
                    type="password"
                    name='password'
                    placeholder="Password"
                    className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    required
                />

                <button
                    className="p-3 my-6 bg-sky-600 text-white w-full font-bold rounded-lg hover:bg-sky-700 transition duration-200 ease-in-out"
                >
                    {isLoginForm ? "Sign In" : "Open an Account"}
                </button>

                <p
                    className="text-center cursor-pointer text-gray-600 hover:underline"
                    onClick={toggleLoginForm}
                >
                    {isLoginForm ? "Not registered yet? Click here to Register" : "Already registered? Sign in Now"}
                </p>
            </form>
        </div>
    );
}

export default Login;

