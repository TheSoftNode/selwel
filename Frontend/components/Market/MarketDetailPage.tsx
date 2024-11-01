"use client"

// import React, { useState } from 'react';
// import
// {
//     LineChart,
//     Line,
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
//     ResponsiveContainer,
//     AreaChart,
//     Area
// } from 'recharts';
// import { ArrowUpRight, ArrowDownRight, TrendingUp, Calendar, DollarSign, PieChart, ArrowLeft } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useRouter } from 'next/navigation';

// interface WeeklyData
// {
//     name: string;
//     profit: number;
// }

// interface MarketData
// {
//     market: number;
//     marketName: string;
//     weeklyProfit: number;
//     weeklyPercents: number,
//     monthlyProfit: number;
//     monthlyPercents: number,
//     quarterlyProfit: number;
//     fourMonthProfit: number;
//     yearlyProfit: number;
//     yearlyPercents: number;
//     weeklyData: WeeklyData[];
// }


// interface PerformanceMetric
// {
//     title: string;
//     value: string;
//     percentage: string;
//     trend: boolean;
// }

// interface MarketDetailPageProps
// {
//     marketData: MarketData;
// }

// const MarketDetailPage: React.FC<MarketDetailPageProps> = ({ marketData }) =>
// {
//     const router = useRouter();
//     const [timeframe, setTimeframe] = useState<'weekly' | 'monthly' | 'quarterly' | 'yearly'>('weekly');

//     // Calculate trend indicators
//     const trendPercentage = ((marketData.weeklyData[marketData.weeklyData.length - 1].profit -
//         marketData.weeklyData[0].profit) / marketData.weeklyData[0].profit * 100).toFixed(2);
//     const isPositiveTrend = Number(trendPercentage) > 0;

//     // Generate performance metrics
//     const performanceMetrics: PerformanceMetric[] = [
//         {
//             title: "Weekly Return",
//             value: `$${(marketData.weeklyProfit).toFixed(3)}`,
//             percentage: `${marketData.weeklyPercents.toFixed(3)}%`,
//             trend: marketData.weeklyProfit > 0
//         },
//         {
//             title: "Monthly Return",
//             value: `$${(marketData.monthlyProfit).toFixed(3)}`,
//             percentage: `${marketData.monthlyPercents.toFixed(3)}%`,
//             trend: marketData.monthlyProfit > 0
//         },
//         {
//             title: "Quarterly Return",
//             value: `$${(marketData.quarterlyProfit).toFixed(3)}`,
//             percentage: `${(marketData.quarterlyProfit / 100).toFixed(3)}%`,
//             trend: marketData.quarterlyProfit > 0
//         },
//         {
//             title: "Annual Return",
//             value: `$${(marketData.yearlyProfit).toFixed(3)}`,
//             percentage: `${marketData.yearlyPercents.toFixed(3)}%`,
//             trend: marketData.yearlyProfit > 0
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-sky-500 to-sky-700 p-6 lg:p-10">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header Section */}
//                 <div className="flex items-center mb-8">
//                     <button
//                         onClick={() => router.push("/market")}
//                         className="flex items-center text-white hover:bg-sky-600 px-4 py-2 rounded-lg transition-all duration-300"
//                     >
//                         <ArrowLeft className="mr-2" />
//                         Back to Markets
//                     </button>
//                 </div>

//                 <div className="bg-white rounded-xl shadow-2xl p-6 mb-8">
//                     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
//                         <div>
//                             {/* <h1 className="text-3xl lg:text-4xl font-bold text-gray-900"> */}
//                             <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r w-[70%] from-blue-600 to-blue-800 text-white  px-4 py-2 rounded-tr-lg rounded-bl-lg">
//                                 {marketData.marketName}
//                             </h1>
//                             <p className="text-green-600 font-semibold mt-2">Market Analysis and Performance Metrics</p>
//                         </div>
//                         <div className="flex items-center mt-4 lg:mt-0">
//                             <div className={`flex items-center ${isPositiveTrend ? 'text-green-500' : 'text-red-500'}`}>
//                                 {isPositiveTrend ? <ArrowUpRight className="w-6 h-6" /> : <ArrowDownRight className="w-6 h-6" />}
//                                 <span className="text-xl font-bold ml-2">{trendPercentage}%</span>
//                             </div>
//                             <span className="text-gray-500 ml-2">Overall Trend</span>
//                         </div>
//                     </div>

//                     {/* Performance Metrics Grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                         {performanceMetrics.map((metric, index) => (
//                             <Card key={index} className="hover:shadow-lg transition-all duration-300">
//                                 <CardHeader className="flex flex-row items-center justify-between pb-2">
//                                     <CardTitle className="text-sm font-medium text-gray-600">
//                                         {metric.title}
//                                     </CardTitle>
//                                     {metric.trend ? (
//                                         <ArrowUpRight className="w-4 h-4 text-green-500" />
//                                     ) : (
//                                         <ArrowDownRight className="w-4 h-4 text-red-500" />
//                                     )}
//                                 </CardHeader>
//                                 <CardContent>
//                                     <div className="text-2xl font-bold">{metric.value}</div>
//                                     <p className="text-xs mt-1 text-blue-500">
//                                         {metric.percentage} return
//                                     </p>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </div>

//                     {/* Charts Section */}
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                         {/* Profit Trend Chart */}
//                         <Card className="p-6">
//                             <CardHeader>
//                                 <CardTitle className="text-xl font-semibold">Profit Trend Analysis</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <ResponsiveContainer width="100%" height={300}>
//                                     <AreaChart data={marketData.weeklyData}>
//                                         <defs>
//                                             <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
//                                                 <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
//                                                 <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
//                                             </linearGradient>
//                                         </defs>
//                                         <CartesianGrid strokeDasharray="3 3" />
//                                         <XAxis dataKey="name" />
//                                         <YAxis />
//                                         <Tooltip />
//                                         <Area
//                                             type="monotone"
//                                             dataKey="profit"
//                                             stroke="#3B82F6"
//                                             fillOpacity={1}
//                                             fill="url(#profitGradient)"
//                                         />
//                                     </AreaChart>
//                                 </ResponsiveContainer>
//                             </CardContent>
//                         </Card>

//                         {/* Performance Comparison Chart */}
//                         <Card className="p-6">
//                             <CardHeader>
//                                 <CardTitle className="text-xl font-semibold">Return Comparison</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <ResponsiveContainer width="100%" height={300}>
//                                     <BarChart data={performanceMetrics}>
//                                         <CartesianGrid strokeDasharray="3 3" />
//                                         <XAxis dataKey="title" />
//                                         <YAxis />
//                                         <Tooltip />
//                                         <Bar dataKey="percentage" fill="#3B82F6" />
//                                     </BarChart>
//                                 </ResponsiveContainer>
//                             </CardContent>
//                         </Card>
//                     </div>

//                     {/* Market Insights Section */}
//                     <Card className="mt-8 p-6">
//                         <CardHeader>
//                             <CardTitle className="text-xl font-semibold">Market Insights</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                 <div className="flex items-start space-x-4">
//                                     <TrendingUp className="w-10 h-10 text-blue-500" />
//                                     <div>
//                                         <h3 className="font-semibold">Growth Trajectory</h3>
//                                         <p className="text-gray-600">Consistent upward trend with stable growth patterns</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start space-x-4">
//                                     <Calendar className="w-10 h-10 text-blue-500" />
//                                     <div>
//                                         <h3 className="font-semibold">Best Performance</h3>
//                                         <p className="text-gray-600">Optimal returns observed in quarterly timeframe</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-start space-x-4">
//                                     <DollarSign className="w-10 h-10 text-blue-500" />
//                                     <div>
//                                         <h3 className="font-semibold">ROI Analysis</h3>
//                                         <p className="text-gray-600">Strong return on investment across all periods</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </CardContent>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MarketDetailPage;

import React, { useState } from 'react';
import
{
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';
import { ArrowUpRight, ArrowDownRight, TrendingUp, Calendar, DollarSign, PieChart, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from 'next/navigation';

interface WeeklyData
{
    name: string;
    profit: number;
}

interface MarketData
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
    weeklyData: WeeklyData[];
}


interface PerformanceMetric
{
    title: string;
    value: string;
    percentage: string;
    trend: boolean;
}

interface MarketDetailPageProps
{
    marketData: MarketData;
}


const MarketDetailPage: React.FC<MarketDetailPageProps> = ({ marketData }) =>
{
    const router = useRouter();
    const [timeframe, setTimeframe] = useState<'weekly' | 'monthly' | 'quarterly' | 'yearly'>('weekly');

    //  Calculate trend indicators
    const trendPercentage = ((marketData.weeklyData[marketData.weeklyData.length - 1].profit -
        marketData.weeklyData[0].profit) / marketData.weeklyData[0].profit * 100).toFixed(2);
    const isPositiveTrend = Number(trendPercentage) > 0;

    // Dynamic performance metrics based on selected timeframe
    const performanceMetrics: PerformanceMetric[] = [
        {
            title: "Weekly Return",
            value: `$${(marketData.weeklyProfit).toFixed(3)}`,
            percentage: `${marketData.weeklyPercents.toFixed(3)}%`,
            trend: marketData.weeklyProfit > 0
        },
        {
            title: "Monthly Return",
            value: `$${(marketData.monthlyProfit).toFixed(3)}`,
            percentage: `${marketData.monthlyPercents.toFixed(3)}%`,
            trend: marketData.monthlyProfit > 0
        },
        {
            title: "Quarterly Return",
            value: `$${(marketData.quarterlyProfit).toFixed(3)}`,
            percentage: `${(marketData.quarterlyProfit / 100).toFixed(3)}%`,
            trend: marketData.quarterlyProfit > 0
        },
        {
            title: "Annual Return",
            value: `$${(marketData.yearlyProfit).toFixed(3)}`,
            percentage: `${marketData.yearlyPercents.toFixed(3)}%`,
            trend: marketData.yearlyProfit > 0
        }
    ];

    // Dynamic data selection based on timeframe
    const getChartData = () =>
    {
        switch (timeframe)
        {
            case 'weekly':
                return marketData.weeklyData;
            case 'monthly':
                // Assuming you might have monthlyData in the marketData interface
                return marketData.weeklyData; // Placeholder, replace with actual monthly data
            case 'quarterly':
                // Placeholder, replace with actual quarterly data
                return marketData.weeklyData;
            case 'yearly':
                // Placeholder, replace with actual yearly data
                return marketData.weeklyData;
            default:
                return marketData.weeklyData;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-500 to-sky-700 p-6 lg:p-10">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex items-center mb-8">
                    <button
                        onClick={() => router.push("/market")}
                        className="flex items-center text-white hover:bg-sky-600 px-4 py-2 rounded-lg transition-all duration-300"
                    >
                        <ArrowLeft className="mr-2" />
                        Back to Markets
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-2xl p-6 mb-8">
                    <div className="flex flex-col flex-wrap sm:flex-row justify-between items-start lg:items-center mb-6">
                        <div>
                            <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r w-[40%] from-blue-600 to-blue-800 text-white  px-4 py-2 rounded-tr-lg rounded-bl-lg">
                                {marketData.marketName}
                            </h1>
                            <p className="text-green-600 font-semibold mt-2">Market Analysis and Performance Metrics</p>
                        </div>
                        <div className="flex items-center mt-4 lg:mt-0">
                            <div className={`flex items-center ${isPositiveTrend ? 'text-green-500' : 'text-red-500'}`}>
                                {isPositiveTrend ? <ArrowUpRight className="w-6 h-6" /> : <ArrowDownRight className="w-6 h-6" />}
                                <span className="text-sm font-bold ml-2">{trendPercentage}%</span>
                            </div>
                            <span className="text-gray-500 text-sm ml-2">Overall Trend</span>
                        </div>

                        {/* Timeframe Selector */}
                        <div className="flex flex-wrap  space-x-2 gap-y-2 mt-4 lg:mt-0">
                            {(['weekly', 'monthly', 'quarterly', 'yearly'] as const).map((frame) => (
                                <button
                                    key={frame}
                                    onClick={() => setTimeframe(frame)}
                                    className={`px-3 py-1 rounded-md text-sm transition-all duration-300 ${timeframe === frame
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                >
                                    {frame.charAt(0).toUpperCase() + frame.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Performance Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {performanceMetrics.map((metric, index) => (
                            <Card key={index} className="hover:shadow-lg transition-all duration-300">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium text-gray-600">
                                        {metric.title}
                                    </CardTitle>
                                    {metric.trend ? (
                                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                                    ) : (
                                        <ArrowDownRight className="w-4 h-4 text-red-500" />
                                    )}
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{metric.value}</div>
                                    <p className="text-xs mt-1 text-blue-500">
                                        {metric.percentage} return
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Profit Trend Chart */}
                        <Card className="p-6">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">
                                    {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)} Profit Trend Analysis
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <AreaChart data={getChartData()}>
                                        <defs>
                                            <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area
                                            type="monotone"
                                            dataKey="profit"
                                            stroke="#3B82F6"
                                            fillOpacity={1}
                                            fill="url(#profitGradient)"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        {/* Performance Comparison Chart */}
                        <Card className="p-6">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">Return Comparison</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={performanceMetrics}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="title" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="percentage" fill="#3B82F6" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>


                    {/* Market Insights Section */}
                    <Card className="mt-8 p-6">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">Market Insights</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="flex items-start space-x-4">
                                    <TrendingUp className="w-10 h-10 text-blue-500" />
                                    <div>
                                        <h3 className="font-semibold">Growth Trajectory</h3>
                                        <p className="text-gray-600">Consistent upward trend with stable growth patterns</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Calendar className="w-10 h-10 text-blue-500" />
                                    <div>
                                        <h3 className="font-semibold">Best Performance</h3>
                                        <p className="text-gray-600">Optimal returns observed in quarterly timeframe</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <DollarSign className="w-10 h-10 text-blue-500" />
                                    <div>
                                        <h3 className="font-semibold">ROI Analysis</h3>
                                        <p className="text-gray-600">Strong return on investment across all periods</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default MarketDetailPage;