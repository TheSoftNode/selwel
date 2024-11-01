import MarketDetailPage from "@/components/Market/MarketDetailPage";
import getSingleMarketData from "@/lib/getSingleMarketData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface PageProps
{
    params: {
        id: string;
    };
}

export default async function MarketDetail({ params }: PageProps)
{
    const marketData = await getSingleMarketData(params.id);

    // If no market data is found, show error state
    if (!marketData)
    {
        return (
            <div className="min-h-screen bg-gradient-to-br from-sky-500 to-sky-700 p-6 lg:p-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center mb-8">
                        <a
                            href="/markets"
                            className="flex items-center text-white hover:bg-sky-600 px-4 py-2 rounded-lg transition-all duration-300"
                        >
                            <ArrowLeft className="mr-2" />
                            Back to Markets
                        </a>
                    </div>

                    <Card className="bg-white shadow-2xl">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-red-600">Market Not Found</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Sorry, we couldn't find the market data you're looking for. Please try another market or return to the markets overview.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    // If market data exists, render the MarketDetailPage
    return <MarketDetailPage marketData={marketData} />;
}