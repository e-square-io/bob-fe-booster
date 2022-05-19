export interface IPrice {
  amount?: number;
  currency: 'ILS' | 'USD' | 'EUR';
}

export interface IProduct {
  id?: string;
  name?: string;
  url?: string;
  price?: IPrice;
}
