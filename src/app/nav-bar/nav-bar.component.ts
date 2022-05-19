import {Component} from '@angular/core';
import {AppService} from "../app.service";


@Component({
  selector: 'app-nav-bar',
  template: ` Hello
{{userName}}!
  `,
  styles: [`
:host{
  background: antiquewhite;
}
  `]
})
export class NavBarComponent {
  userName?:string;
  constructor(private appService:AppService) {
    this.userName = this.appService.userName;
  }


}
