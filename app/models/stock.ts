export interface Stock {
    symbol: string;
    price: number;
    change: number;
    percentChange: number;
}

export interface Sector {
    name: string;
    percentChange: number;
    stocks: Stock[];
}

export const SECTORS: Sector[] = [
    { name: 'Technology', percentChange: 2.35, stocks: [] },
    { name: 'Healthcare', percentChange: -1.31, stocks: [] },
    { name: 'Consumer', percentChange: 2.31, stocks: [] },
    { name: 'Energy', percentChange: 2.31, stocks: [] },
    { name: 'Financial', percentChange: 2.31, stocks: [] },
    { name: 'Industrial', percentChange: 2.31, stocks: [] },
    { name: 'Materials', percentChange: 2.31, stocks: [] },
    { name: 'Utilities', percentChange: 2.31, stocks: [] },
    { name: 'Real Estate', percentChange: -1.31, stocks: [] }
];