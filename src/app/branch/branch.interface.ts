
export interface IAddress {
  city?: string;
  street?: string;
  house?: string;
}
export interface IBranch{
  id?:string;
  name:string;
  address?:IAddress;
  img?: string;
}
