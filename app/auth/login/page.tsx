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
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-500 to-sky-700'>
            <form className="bg-white shadow-lg p-10 rounded-lg w-11/12 sm:w-96 transition-transform transform hover:scale-105">
                <h1 className="font-extrabold text-3xl text-center text-sky-700 mb-6">
                    {isLoginForm ? "Welcome, Please sign in." : "Registration"}
                </h1>

                {/* Conditional Fields for Registration */}
                {!isLoginForm && (
                    <>
                        <input
                            type="text"
                            placeholder="Country of Residence"
                            className="p-3 my-2 w-full bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                        <input
                            type="text"
                            placeholder="Type of Account"
                            className="p-3 my-2 w-full bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </>
                )}

                <input
                    type="email"
                    placeholder="Email Address"
                    className="p-3 my-2 w-full bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="p-3 my-2 w-full bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
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


// "use client"

// import React, { useState } from 'react';

// const Login = () =>
// {
//     const [isLoginForm, setIsLoginForm] = useState(true);

//     const toggleLoginForm = () =>
//     {
//         setIsLoginForm(!isLoginForm);
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <form className="bg-white shadow-lg my-3 mx-auto w-11/12 sm:w-96 p-10 rounded-lg">
//                 <h1 className="font-semibold text-2xl py-4 text-center text-gray-800">
//                     {isLoginForm ? "Welcome, Please sign in." : "Registration"}
//                 </h1>

//                 {/* Conditional Fields for Registration */}
//                 {!isLoginForm && (
//                     <>
//                         <input
//                             type="text"
//                             placeholder="Country of Residence"
//                             className="p-3 my-2 w-full bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Type of Account"
//                             className="p-3 my-2 w-full bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
//                         />
//                     </>
//                 )}

//                 <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="p-3 my-2 w-full bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
//                     required
//                 />

//                 <input
//                     type="password"
//                     placeholder="Password"
//                     className="p-3 my-2 w-full bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
//                     required
//                 />

//                 <button
//                     className="p-3 my-6 bg-red-500 text-white w-full font-bold rounded-lg hover:bg-red-600 transition duration-200 ease-in-out"
//                 >
//                     {isLoginForm ? "Sign In" : "Open an Account"}
//                 </button>

//                 <p
//                     className="text-center cursor-pointer text-gray-600 hover:underline"
//                     onClick={toggleLoginForm}
//                 >
//                     {isLoginForm ? "Not registered yet? Click here to Register" : "Already registered? Sign in Now"}
//                 </p>
//             </form>
//         </div>
//     );
// }

// export default Login;
