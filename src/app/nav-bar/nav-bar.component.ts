import {Component} from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  template: `
{{name}}
  `,
  styles: [`
:host{
  background: antiquewhite;
}
  `]
})
export class NavBarComponent {
  numbers: number[] = [];
  name?: string;
  user={
    name:undefined,
    password:'undefined'
  }
  password?: string;
  result = 0;
  inputType = 'text';
  passwordType = 'password';
  constructor() {
    this.name = 'yonatan1';
    for (let i = 1; i < 10; i++) {
      this.numbers.push(i);
    }
    this.numbers.push(0);

  }

  onKeyUp(event:KeyboardEvent,num:number){
    console.log(event);
  }
  togglePassword():void{
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

}
