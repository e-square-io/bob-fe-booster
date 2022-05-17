export type CalculationsType ='multiply' | 'divide' | 'add' | 'minus';

export enum CalculationsEnum {
  multiply = 'multiply',
  divide = 'divide',
  add = 'add',
  minus = 'minus',
}


export const CALCULATIONS_TYPES = ['multiply' , 'divide' , 'add' , 'minus'];
export type calculationsType = typeof CALCULATIONS_TYPES[number];
export interface CalculatorAction{
  type:CalculationsType;
  label?:string;
}

