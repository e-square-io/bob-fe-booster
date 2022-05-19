export interface IPrice {
  amount?: number;
  currency: 'ILS' | 'USD' | 'EUR';
}

export interface IItem {
  id?: string;
  name?: string;
  url?: string;
  price?: IPrice;
}
