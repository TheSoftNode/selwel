"use client";

import React, { useEffect, useState, ChangeEvent } from 'react';
import
{
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
// import { useAuth } from '@/components/Auth/authProvider';
// import { ProtectedRoute } from '@/components/Auth/ProtectRoutes';

interface Profit
{
    market: number;
    weeklyProfit: number;
    monthlyProfit: number;
    yearlyProfit: number;
}

const Market: React.FC = () =>
{

    // const { userEmail } = useAuth();

    const [selectedMarkets, setSelectedMarkets] = useState<number>(0);
    const [profits, setProfits] = useState<Profit[]>([]);

    useEffect(() =>
    {
        if (typeof window !== 'undefined')
        {
            const storedMarkets = localStorage.getItem('selectedMarkets');
            setSelectedMarkets(storedMarkets ? parseInt(storedMarkets) : 0);

            const storedProfits = localStorage.getItem('profits');
            setProfits(storedProfits ? JSON.parse(storedProfits) : []);
        }
    }, []);

    useEffect(() =>
    {
        if (typeof window !== 'undefined')
        {
            localStorage.setItem('selectedMarkets', selectedMarkets.toString());
            localStorage.setItem('profits', JSON.stringify(profits));
        }
    }, [selectedMarkets, profits]);

    const handleMarketChange = (e: ChangeEvent<HTMLSelectElement>) =>
    {
        const value = parseInt(e.target.value);
        setSelectedMarkets(value);

        const profitEstimates: Profit[] = Array.from({ length: value }, (_, index) =>
        {
            const weeklyProfit = 1000 * 0.05; // 5% weekly profit
            const monthlyProfit = 1000 * 0.2; // 20% monthly profit
            const yearlyProfit = 1000 * 1.5; // 150% yearly profit
            return {
                market: index + 1,
                weeklyProfit,
                monthlyProfit,
                yearlyProfit,
            };
        });

        setProfits(profitEstimates);
    };

    const generateChartData = (marketIndex: number): Array<{ name: string; profit: number }> =>
    {
        return [
            { name: 'Week 1', profit: (marketIndex + 1) * 2000 },
            { name: 'Week 2', profit: (marketIndex + 1) * 3000 },
            { name: 'Week 3', profit: (marketIndex + 1) * 2500 },
            { name: 'Week 4', profit: (marketIndex + 1) * 4000 },
        ];
    };

    return (
        // <ProtectedRoute>
        <div className='px-5 lg:px-20 py-10 bg-gradient-to-br from-sky-500 to-sky-700 w-full min-h-screen'>
            <h1 className='text-xl lg:text-4xl text-white font-extrabold pt-5 text-center'>
                Market Profit Analysis
            </h1>
            <p className='mt-5 text-white lg:text-lg text-center max-w-2xl mx-auto'>
                Our advanced AI models analyze market data to identify the most profitable opportunities,
                providing insights across various markets.
            </p>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto transition-all duration-300 ease-in-out">
                <label className='block text-lg font-semibold mb-4 text-sky-700'>
                    Select Number of Markets (0-10):
                </label>
                <select
                    className='p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out'
                    value={selectedMarkets}
                    onChange={handleMarketChange}
                >
                    {[...Array(11).keys()].map(num => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {profits.map((profit) => (
                    <div
                        key={profit.market}
                        className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-r from-blue-50 to-blue-100"
                    >
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold px-4 py-2 rounded-tr-lg rounded-bl-lg shadow-lg">
                            Market {profit.market}
                        </div>

                        <div className="p-6">
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Investment Overview</h2>

                            <p className="text-lg text-gray-700 mb-4">
                                Initial Investment: <span className="font-bold text-black ml-2">$1000 USD</span>
                            </p>

                            <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-blue-600">Weekly Profit</span>
                                    <span className="text-xl font-bold text-green-600">
                                        ${profit.weeklyProfit.toFixed(2)} USD
                                    </span>
                                </div>

                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-blue-600">Monthly Profit</span>
                                    <span className="text-xl font-bold text-green-600">
                                        ${profit.monthlyProfit.toFixed(2)} USD
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-blue-600">Yearly Profit</span>
                                    <span className="text-xl font-bold text-green-600">
                                        ${profit.yearlyProfit.toFixed(2)} USD
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-inner">
                                <h3 className="text-lg font-semibold text-sky-700 mb-2">Profit Chart:</h3>
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={generateChartData(profit.market - 1)}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="profit" stroke="#4A90E2" activeDot={{ r: 8 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-all duration-300 transform hover:scale-105">
                                View More
                            </button>
                        </div>

                        <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-sky-700 mb-4">Overall Profit Chart:</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={[
                        { name: 'Week 1', profit: 2000 },
                        { name: 'Week 2', profit: 3000 },
                        { name: 'Week 3', profit: 2500 },
                        { name: 'Week 4', profit: 4000 },
                    ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="profit" stroke="#4A90E2" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
        // </ProtectedRoute>

    );
};

export default Market;
