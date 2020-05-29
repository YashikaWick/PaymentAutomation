import { User } from './core/user';

export class Product{

    constructor(){}
    
    productCode: number;
    productType: string;
    productName: string;
    productDescription: string;
    pricePreference:string;
    productPrice: number;
    productManager: User;
    revenueShare: string;
    startDate: Date;
    endDate: Date;
}