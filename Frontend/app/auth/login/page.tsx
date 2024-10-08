// "use client";

// import { DJANGO_BASE_URL } from '@/config/defaults';
// import { useRouter } from 'next/navigation';
// import React, { useState, useEffect, FormEvent } from 'react';
// import { toast } from 'react-toastify';

// const USER_API_URL = `${DJANGO_BASE_URL}/api/users/`;
// const COUNTRIES_API_URL = "https://restcountries.com/v3.1/all";

// const Login = () =>
// {
//     const [isLoginForm, setIsLoginForm] = useState(true);
//     const [countries, setCountries] = useState<string[]>([]);
//     const [message, setMessage] = useState<string>("");
//     const [errors, setErrors] = useState<Record<string, any>>({});
//     const [error, setError] = useState<string>("");

//     const router = useRouter();

//     // Fetch countries from external API
//     useEffect(() =>
//     {
//         const fetchCountries = async () =>
//         {
//             try
//             {
//                 const response = await fetch(COUNTRIES_API_URL);
//                 const data = await response.json();
//                 const countryNames = data.map((country: any) => country.name.common);
//                 setCountries(countryNames.sort()); // Sort alphabetically
//             } catch (error)
//             {
//                 console.error("Failed to fetch countries", error);
//             }
//         };

//         fetchCountries();
//     }, []);

//     async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void>
//     {
//         event.preventDefault();
//         setMessage("");
//         setErrors({});
//         setError("");

//         const formData = new FormData(event.currentTarget);
//         const objectFromForm = Object.fromEntries(formData.entries());
//         const jsonData = JSON.stringify(objectFromForm);

//         const requestOptions: RequestInit = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: jsonData,
//         };

//         if (!isLoginForm)
//         {
//             try
//             {
//                 const response = await fetch("http://127.0.0.1:8001/api/users/", requestOptions);
//                 if (response.status === 201 || response.status === 200)
//                 {
//                     toast.success("Welcome. Do well to login");
//                     // router.push("/login")
//                     setIsLoginForm(true)
//                 } else
//                 {
//                     const data = await response.json();
//                     setErrors(data);
//                     if (!data.email)
//                     {
//                         setError("There was an error with your request. Please try again.");
//                         toast.error("There was an error with your request. Please try again.")
//                     }
//                     toast.error(data.email[0].message)
//                     console.log(errors)
//                 }
//             } catch (e: any)
//             {
//                 console.log(errors)
//                 setError("An error occurred while processing your request.");
//             }
//         }

//     }

//     const toggleLoginForm = () =>
//     {
//         setIsLoginForm(!isLoginForm);
//     };

//     return (
//         <div className="flex items-start pt-10 justify-center min-h-screen bg-gray-100">
//             <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded-lg w-11/12 sm:w-96 transition-transform transform hover:scale-105">
//                 <h1 className="font-extrabold text-2xl text-center text-sky-700 mb-6">
//                     {isLoginForm ? "Welcome, Please sign in." : "Registration"}
//                 </h1>

//                 {/* Conditional Fields for Registration */}
//                 {!isLoginForm && (
//                     <>
//                         {/* Country of Residence Dropdown */}
//                         <select
//                             name="country"
//                             className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in-out"
//                             required
//                         >
//                             <option value="">Select Country of Residence</option>
//                             {countries.map((country) => (
//                                 <option key={country} value={country}>
//                                     {country}
//                                 </option>
//                             ))}
//                         </select>

//                         {/* Account Type Dropdown */}
//                         <select
//                             name="accountType"
//                             className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in-out"
//                             required
//                         >
//                             <option value="">Select Account Type</option>
//                             <option value="Individual">Individual</option>
//                             <option value="Business">Business</option>
//                         </select>
//                     </>
//                 )}

//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email Address"
//                     className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in-out"
//                     required
//                 />

//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in-out"
//                     required
//                 />

//                 <button
//                     className="p-3 my-6 bg-sky-600 text-white w-full font-bold rounded-lg hover:bg-sky-700 transition duration-200 ease-in-out"
//                 >
//                     {isLoginForm ? "Sign In" : "Open an Account"}
//                 </button>

//                 <p className="text-center cursor-pointer text-gray-600" onClick={toggleLoginForm}>
//                     {isLoginForm ? (
//                         <span>Not registered yet? <span className="text-sky-600 hover:underline">Click here to Register</span></span>
//                     ) : (
//                         <span>Already registered? <span className="text-sky-600 hover:underline">Sign in Now</span></span>
//                     )}
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Login;

"use client";

import { DJANGO_BASE_URL } from '@/config/defaults';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import zxcvbn from 'zxcvbn'; // Password strength checking library

const COUNTRIES_API_URL = "https://restcountries.com/v3.1/all";

// Validation schema using Yup
const schema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Email is required"),
  password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
  country: yup.string().required("Please select your country of residence"),
  accountType: yup.string().required("Please select an account type")
});

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [countries, setCountries] = useState<string[]>([]);
  const [passwordStrength, setPasswordStrength] = useState<number>(0);
  const router = useRouter();

  // Fetch countries from external API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(COUNTRIES_API_URL);
        const data = await response.json();
        const countryNames = data.map((country: any) => country.name.common);
        setCountries(countryNames.sort());
      } catch (error) {
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

  // Password strength calculation
  const passwordValue = watch("password");
  useEffect(() => {
    const result = zxcvbn(passwordValue || "");
    setPasswordStrength(result.score);
  }, [passwordValue]);

  const onSubmit = async (data: any) => {
    // Reset form fields after submission
    reset();
    if (!isLoginForm) {
      try {
        const response = await fetch(`${DJANGO_BASE_URL}/api/users/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.status === 201 || response.status === 200) {
          toast.success("Welcome. Please login.");
          setIsLoginForm(true);
        } else {
          const resData = await response.json();
          toast.error("Registration failed");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  const toggleLoginForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  // Get dynamic class for password field based on strength
  const getPasswordStrengthClass = () => {
    switch (passwordStrength) {
      case 0:
      case 1:
        return 'border-red-500';
      case 2:
        return 'border-amber-500';
      case 3:
      case 4:
        return 'border-green-500';
      default:
        return '';
    }
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
            <label className="block text-gray-700">
              Country of Residence <span className="text-red-500">*</span>
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
            <label className="block text-gray-700">
              Account Type <span className="text-red-500">*</span>
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

        <label className="block text-gray-700">
          Email <span className="text-red-500">*</span>
          <input
            type="email"
            {...register("email")}
            placeholder="Email Address"
            className="p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in-out"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </label>

        <label className="block text-gray-700">
          Password <span className="text-red-500">*</span>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className={`p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none transition duration-200 ease-in-out border-b-4 ${getPasswordStrengthClass()}`}
          />
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

