import { Observable } from '@nativescript/core';
import { Sector, SECTORS } from './models/stock';

export class MainViewModel extends Observable {
    private _sectors: Sector[];

    constructor() {
        super();
        this._sectors = SECTORS;
        this.populateStockData();
    }

    get sectors(): Sector[] {
        return this._sectors;
    }

    private populateStockData() {
        // In a real app, this would fetch data from an API
        const sampleStocks = [
            { symbol: 'AAPL', price: 321.12, change: 2.30, percentChange: 0.72 },
            { symbol: 'MSFT', price: 321.12, change: 2.30, percentChange: 0.72 },
            { symbol: 'GOOGL', price: 321.12, change: -2.30, percentChange: -0.72 },
            // Add more sample stocks as needed
        ];

        this._sectors.forEach(sector => {
            sector.stocks = [...sampleStocks];
        });
    }

    onSectorTap(args) {
        const sector = args.view.bindingContext;
        // Navigate to sector detail view
        // TODO: Implement navigation
    }

    onMenuTap() {
        // Show filter/sort menu
        // TODO: Implement menu
    }
}