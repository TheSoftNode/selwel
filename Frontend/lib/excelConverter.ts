import * as XLSX from 'xlsx';

interface MarketProfit {
    market: number;
    marketName: string;
    weeklyProfit: number;
    monthlyProfit: number;
    quarterlyProfit: number;
    fourMonthProfit: number;
    yearlyProfit: number;
    weeklyData: Array<{
        name: string;
        profit: number;
    }>;
}

export const convertExcelToJSON = async (file: File): Promise<MarketProfit[]> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target?.result as ArrayBuffer);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);

                const marketProfits: MarketProfit[] = jsonData.map((row: any, index) => {
                    // Calculate weekly data points based on the weekly return
                    const baseWeeklyReturn = parseFloat(row['weekly return based on 1000 usd']);
                    const weeklyDataPoints = Array(4).fill(0).map((_, i) => ({
                        name: `Week ${i + 1}`,
                        profit: 1000 * (1 + (baseWeeklyReturn / 100) * (i + 1))
                    }));

                    return {
                        market: index + 1,
                        marketName: row['market name'],
                        weeklyProfit: parseFloat(row['weekly return based on 1000 usd']),
                        monthlyProfit: parseFloat(row['monthly return']),
                        quarterlyProfit: parseFloat(row['quarterly Return']),
                        fourMonthProfit: parseFloat(row['four months return']),
                        yearlyProfit: parseFloat(row['Annual Return']),
                        weeklyData: weeklyDataPoints
                    };
                });

                resolve(marketProfits);
            } catch (error) {
                reject(error);
            }
        };

        reader.onerror = (error) => reject(error);
        reader.readAsArrayBuffer(file);
    });
};