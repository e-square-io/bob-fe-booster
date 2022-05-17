import {Component, OnInit} from '@angular/core';
import {CalculationsType, calculationsType, CalculatorAction} from "./calculator.interface";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  numbers: number[] = [];
  name?: string;
  user = {
    name: undefined,
    password: 'undefined'
  }
  password?: string;
  result = 0;
  inputType = 'text';
  passwordType = 'password';
  private currentAction?: CalculationsType;

  constructor() {
    this.name = 'yonatan1';
    for (let i = 1; i < 10; i++) {
      this.numbers.push(i);
    }
    this.numbers.push(0);

  }

  ngOnInit() {
  }

  onKeyUp(event: KeyboardEvent, num: number) {
    console.log(event);
  }

  togglePassword(): void {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  onActions(action: CalculationsType) {
    this.currentAction = action;
  }

  calc() {
   switch (this.currentAction){
     case 'add':
       this.onAdd();
       break;
       case 'minus':
         this.onMinus();
       break;
   }
  }

  onAdd() {

  }
  onMinus() {

  }
}
