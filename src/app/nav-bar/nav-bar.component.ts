import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { AppService } from "../app.service";


@Component({
  selector: 'app-nav-bar',
  template: ` 

<div style="display: flex; align-items:center justify-content:center;"> Hello {{userName}}!


<ul>

  
  <li>
    <a routerLink="/posts">Posts</a>
  </li>
</ul>
</div>
  `,
  styles: [`
:host{
  background: antiquewhite;
  
}
  `]
})
export class NavBarComponent {
  userName?: string | null = null;
  constructor(private appService: AppService, private authService: AuthService) {
    this.authService.getUser().subscribe(user => {
      console.log(user);
      this.userName = user;
    });
  }


}
