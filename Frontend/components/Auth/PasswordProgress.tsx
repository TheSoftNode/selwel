import React, { useState } from 'react';

const PasswordField = () =>
{
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

    return (
        <div className="relative">
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className={`p-3 my-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in-out border-b-4 ${getBorderColor()}`}
                required
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
        </div>
    );
};

export default PasswordField;
