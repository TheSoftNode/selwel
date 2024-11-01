import { promises as fs } from 'fs';
import path from 'path';
import * as XLSX from 'xlsx';

interface WeeklyDataPoint
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
    weeklyData: WeeklyDataPoint[];
}

export default async function getSingleMarketData(id: string): Promise<MarketData | null>
{
    try
    {
        const filePath = path.join(process.cwd(), 'lib', 'overall_market_data.xlsx');
        const buffer = await fs.readFile(filePath);
        const workbook = XLSX.read(buffer);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Find the specific market data based on ID (market number)
        const marketIndex = parseInt(id) - 1;
        // const marketIndex = id - 1;
        if (marketIndex < 0 || marketIndex >= jsonData.length)
        {
            console.error('Market ID not found');
            return null;
        }

        const row = jsonData[marketIndex] as { [key: string]: any };
        const baseWeeklyReturn = parseFloat(row['weekly return based on 1000 usd']);
        const weeklyDataPoints = Array(4).fill(0).map((_, i) => ({
            name: `Week ${i + 1}`,
            profit: 1000 * (1 + (baseWeeklyReturn / 100) * (i + 1))
        }));

        const marketData: MarketData = {
            market: marketIndex + 1,
            marketName: row['market  name'],
            weeklyProfit: baseWeeklyReturn,
            weeklyPercents: parseFloat(row['weekly precents']),
            monthlyProfit: parseFloat(row['monthly  return']),
            monthlyPercents: parseFloat(row['monthly precents']),
            quarterlyProfit: parseFloat(row['quarterly Return']),
            fourMonthProfit: parseFloat(row['four months return']),
            yearlyProfit: parseFloat(row['Annual Return']),
            yearlyPercents: parseFloat(row['yearly  precents']),
            weeklyData: weeklyDataPoints
        };

        return marketData;
    } catch (error)
    {
        console.error('Error reading Excel file or processing data:', error);
        return null;
    }
}