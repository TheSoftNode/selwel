import { promises as fs } from 'fs';
import path, { parse } from 'path';
import * as XLSX from 'xlsx';

export default async function getMarketData()
{
    try
    {
        const filePath = path.join(process.cwd(), 'lib', 'overall_market_data.xlsx');
        const buffer = await fs.readFile(filePath);
        const workbook = XLSX.read(buffer);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);


        const marketProfits = jsonData.map((row: any, index) =>
        {
            const baseWeeklyReturn = parseFloat(row['weekly return based on 1000 usd']);
            const weeklyDataPoints = Array(4).fill(0).map((_, i) => ({
                name: `Week ${i + 1}`,
                profit: 1000 * (1 + (baseWeeklyReturn / 100) * (i + 1))
            }));

            return {
                market: index + 1,
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
        });

        return marketProfits;
    } catch (error)
    {
        console.error('Error reading Excel file:', error);
        return [];
    }
}