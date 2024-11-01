'use client';
import React, { useState } from 'react';
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
import Link from 'next/link';

interface MarketProfit
{
    market: number;
    marketName: string;
    weeklyProfit: number;
    weeklyPercents: number,
    monthlyProfit: number;
    monthlyPercents: number,
    quarterlyProfit: number;
    fourMonthProfit: number;
    yearlyProfit: number;
    yearlyPercents: number;
    weeklyData: Array<{
        name: string;
        profit: number;
    }>;
}

interface MarketAnalysisProps
{
    initialData: MarketProfit[];
}

const MarketAnalysis: React.FC<MarketAnalysisProps> = ({ initialData }) =>
{
    const [selectedMarkets, setSelectedMarkets] = useState<number>(0);
    const profits = initialData;
    // const router = useRouter();

    const handleMarketChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    {
        const value = parseInt(e.target.value);
        setSelectedMarkets(value);
    };

    return (
        <div className="px-5 lg:px-20 py-10 bg-gradient-to-br from-sky-500 to-sky-700 w-full min-h-screen">
            <h1 className="text-xl lg:text-4xl text-white font-extrabold pt-5 text-center">
                Market Profit Analysis
            </h1>
            <p className="mt-5 text-white lg:text-lg text-center max-w-2xl mx-auto">
                Our advanced AI models analyze market data to identify the most profitable opportunities,
                providing insights across various markets.
            </p>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
                <label className="block text-lg font-semibold mb-4 text-sky-700">
                    Select Number of Markets (0-10):
                </label>
                <select
                    className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                {profits.slice(0, selectedMarkets).map((profit) => (
                    <div
                        key={profit.market}
                        className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold px-4 py-2 rounded-tr-lg rounded-bl-lg">
                            {profit.marketName}
                        </div>

                        <div className="p-6">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 mb-2">Return Analysis</h2>

                            <p className="text-lg text-gray-700 mb-4">
                                Base Investment: <span className="font-bold text-black text-sm md:text-base ml-2">$1000 USD</span>
                            </p>

                            <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-blue-600">Weekly Return</span>
                                    <div className="text-right">
                                        <span className="text-sm md:text-sm font-bold text-green-600">
                                            ${(profit.weeklyProfit).toFixed(3)}
                                        </span>
                                        <span className="ml-2 text-sm text-gray-600">
                                            ({(profit.weeklyPercents).toFixed(3)}%)
                                        </span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-blue-600">Monthly Return</span>
                                    <div className="text-right">
                                        <span className="text-sm md:text-sm font-bold text-green-600">
                                            ${(profit.monthlyProfit).toFixed(3)}
                                        </span>
                                        <span className="ml-2 text-sm text-gray-600">
                                            ({(profit.monthlyPercents).toFixed(4)}%)
                                        </span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-semibold text-blue-600">Quarterly Return</span>
                                    <div className="text-right">
                                        <span className="text-sm md:text-sm font-bold text-green-600">
                                            ${(profit.quarterlyProfit).toFixed(2)}
                                        </span>
                                        <span className="ml-2 text-sm text-gray-600">
                                            ({(profit.quarterlyProfit / 100).toFixed(2)}%)
                                        </span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-base text-blue-600">Annual Return</span>
                                    <div className="text-right">
                                        <span className="text-sm md:text-sm font-bold text-green-600">
                                            ${(profit.yearlyProfit).toFixed(3)}
                                        </span>
                                        <span className="ml-2 text-sm text-gray-600">
                                            ({(profit.yearlyPercents).toFixed(3)}%)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-inner">
                                <h3 className="text-sm font-semibold text-sky-700 mb-2">Return Trend:</h3>
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={profit.weeklyData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="profit" stroke="#4A90E2" activeDot={{ r: 8 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            {/* <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-all duration-300 hover:scale-105">
                                View Details
                            </button> */}
                            <Link
                                href={`/market/${profit.market}`}
                            >
                                <button
                                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-all duration-300 hover:scale-105"
                                >
                                    View Details
                                </button>
                            </Link>
                        </div>

                        <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-sky-700 mb-4">Overall Return Trend:</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={profits[0]?.weeklyData || []}>
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
    );
};

export default MarketAnalysis;