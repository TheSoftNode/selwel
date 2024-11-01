import MarketAnalysis from '@/components/Market/MarketAnalysis';
import getMarketData from '@/lib/getMarketData';



export default async function MarketPage()
{
    const marketData = await getMarketData();

    return <MarketAnalysis initialData={marketData} />;
}