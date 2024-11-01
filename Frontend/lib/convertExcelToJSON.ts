import * as XLSX from 'xlsx';

interface MarketProfit {
    market: number;
    weeklyProfit: number;
    weeklyProfitPercentage: number;
    monthlyProfit: number;
    monthlyProfitPercentage: number;
    yearlyProfit: number;
    yearlyProfitPercentage: number;
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

                const marketProfits: MarketProfit[] = jsonData.map((row: any, index) => ({
                    market: index + 1,
                    weeklyProfit: parseFloat(row.weeklyProfit) || 0,
                    weeklyProfitPercentage: parseFloat(row.weeklyProfitPercentage) || 0,
                    monthlyProfit: parseFloat(row.monthlyProfit) || 0,
                    monthlyProfitPercentage: parseFloat(row.monthlyProfitPercentage) || 0,
                    yearlyProfit: parseFloat(row.yearlyProfit) || 0,
                    yearlyProfitPercentage: parseFloat(row.yearlyProfitPercentage) || 0,
                    weeklyData: [
                        { name: 'Week 1', profit: parseFloat(row.week1Profit) || 0 },
                        { name: 'Week 2', profit: parseFloat(row.week2Profit) || 0 },
                        { name: 'Week 3', profit: parseFloat(row.week3Profit) || 0 },
                        { name: 'Week 4', profit: parseFloat(row.week4Profit) || 0 },
                    ]
                }));

                resolve(marketProfits);
            } catch (error) {
                reject(error);
            }
        };

        reader.onerror = (error) => reject(error);
        reader.readAsArrayBuffer(file);
    });
};