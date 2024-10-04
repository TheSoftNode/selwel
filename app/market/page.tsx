"use client"

import React, { useState, ChangeEvent } from 'react';

interface Profit
{
    market: number;
    weeklyProfit: number;
    monthlyProfit: number;
    yearlyProfit: number;
}

const Market: React.FC = () =>
{
    const [selectedMarkets, setSelectedMarkets] = useState<number>(1);
    const [profits, setProfits] = useState<Profit[]>([]);

    const handleMarketChange = (e: ChangeEvent<HTMLSelectElement>) =>
    {
        const value = parseInt(e.target.value);
        setSelectedMarkets(value);

        // Example profit estimates for each market
        const profitEstimates: Profit[] = Array.from({ length: value }, (_, index) =>
        {
            const weeklyProfit = 1000 * 0.05;  // 5% weekly profit
            const monthlyProfit = 1000 * 0.2;  // 20% monthly profit
            const yearlyProfit = 1000 * 1.5;   // 150% yearly profit
            return {
                market: index + 1,
                weeklyProfit,
                monthlyProfit,
                yearlyProfit,
            };
        });

        setProfits(profitEstimates);
    };

    return (
        <div className='px-5 lg:px-20 py-10 bg-gradient-to-br from-sky-500 to-sky-700 w-full min-h-screen'>
            <h1 className='text-3xl lg:text-5xl text-white font-extrabold pt-5 text-center'>
                Market Profit Analysis
            </h1>
            <p className='mt-5 text-white lg:text-lg text-center max-w-2xl mx-auto'>
                Our advanced AI models analyze market data to identify the most profitable opportunities,
                providing insights across various markets.
            </p>

            {/* Market Selection */}
            <div className="mt-10 bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto transition-all duration-300 ease-in-out">
                <label className='block text-lg font-semibold mb-4 text-sky-700'>
                    Select Number of Markets (1-10):
                </label>
                <select
                    className='p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out'
                    value={selectedMarkets}
                    onChange={handleMarketChange}
                >
                    {[...Array(10).keys()].map(num => (
                        <option key={num + 1} value={num + 1}>
                            {num + 1}
                        </option>
                    ))}
                </select>
            </div>

            {/* Profit Estimates */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {profits.map((profit) => (
                    <div
                        key={profit.market}
                        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        <h2 className="text-2xl font-semibold text-sky-700 mb-4">Market {profit.market}</h2>
                        <p className="text-gray-600 mb-2">
                            Investment: <span className="font-bold text-black">$1000 USD</span>
                        </p>
                        <div className="text-gray-800 space-y-3">
                            <p>
                                <span className="font-semibold text-sky-600">Weekly Profit:</span>
                                <span className="block text-lg font-bold text-green-600">${profit.weeklyProfit.toFixed(2)} USD</span>
                            </p>
                            <p>
                                <span className="font-semibold text-sky-600">Monthly Profit:</span>
                                <span className="block text-lg font-bold text-green-600">${profit.monthlyProfit.toFixed(2)} USD</span>
                            </p>
                            <p>
                                <span className="font-semibold text-sky-600">Yearly Profit:</span>
                                <span className="block text-lg font-bold text-green-600">${profit.yearlyProfit.toFixed(2)} USD</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chart Section Placeholder */}
            <div className="mt-12 bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-sky-700 mb-4">Profit Chart:</h2>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
                    <p className="text-gray-500">Interactive chart coming soon...</p>
                </div>
            </div>
        </div>
    );
};

export default Market;


// import React, { useState, ChangeEvent } from 'react';

// interface Profit
// {
//     market: number;
//     weeklyProfit: number;
//     monthlyProfit: number;
//     yearlyProfit: number;
// }

// const Market: React.FC = () =>
// {
//     const [selectedMarkets, setSelectedMarkets] = useState<number>(1);
//     const [profits, setProfits] = useState<Profit[]>([]);

//     const handleMarketChange = (e: ChangeEvent<HTMLSelectElement>) =>
//     {
//         const value = parseInt(e.target.value);
//         setSelectedMarkets(value);

//         // Example profit estimates for each market
//         const profitEstimates: Profit[] = Array.from({ length: value }, (_, index) =>
//         {
//             const weeklyProfit = 1000 * 0.05;  // 5% weekly profit
//             const monthlyProfit = 1000 * 0.2;  // 20% monthly profit
//             const yearlyProfit = 1000 * 1.5;   // 150% yearly profit
//             return {
//                 market: index + 1,
//                 weeklyProfit,
//                 monthlyProfit,
//                 yearlyProfit,
//             };
//         });

//         setProfits(profitEstimates);
//     };

//     return (
//         <div className='px-5 lg:px-20 py-10 bg-sky-500 w-full min-h-screen'>
//             <h1 className='text-3xl lg:text-4xl text-white font-extrabold pt-5'>Watch Market</h1>
//             <p className='mt-5 text-white lg:text-lg'>
//                 Our AI models analyze market data to find the most profitable shares.
//             </p>

//             {/* Market Selection */}
//             <div className="mt-10 bg-white p-5 rounded-md shadow-md max-w-md mx-auto">
//                 <label className='block text-lg font-bold mb-2 text-sky-700'>
//                     Select Number of Markets (1-10):
//                 </label>
//                 <select
//                     className='p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400'
//                     value={selectedMarkets}
//                     onChange={handleMarketChange}
//                 >
//                     {[...Array(10).keys()].map(num => (
//                         <option key={num + 1} value={num + 1}>
//                             {num + 1}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             {/* Profit Estimates */}
//             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {profits.map((profit) => (
//                     <div key={profit.market} className="bg-white rounded-lg shadow-md p-6">
//                         <h2 className="text-xl font-bold text-sky-600 mb-2">Market {profit.market}</h2>
//                         <p className="text-gray-500 mb-4">Investment: <span className="font-bold">$1000 USD</span></p>
//                         <div className="text-gray-800 space-y-2">
//                             <p>
//                                 <span className="font-semibold text-sky-700">Weekly Profit:</span>
//                                 <span className="block text-lg font-bold text-green-500">${profit.weeklyProfit.toFixed(2)} USD</span>
//                             </p>
//                             <p>
//                                 <span className="font-semibold text-sky-700">Monthly Profit:</span>
//                                 <span className="block text-lg font-bold text-green-500">${profit.monthlyProfit.toFixed(2)} USD</span>
//                             </p>
//                             <p>
//                                 <span className="font-semibold text-sky-700">Yearly Profit:</span>
//                                 <span className="block text-lg font-bold text-green-500">${profit.yearlyProfit.toFixed(2)} USD</span>
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Chart Section Placeholder */}
//             <div className="mt-10 bg-white p-5 rounded-lg shadow-md">
//                 <h2 className="text-xl font-bold text-sky-700">Profit Chart:</h2>
//                 <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
//                     <p className="text-gray-600">Chart will be displayed here</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Market;
