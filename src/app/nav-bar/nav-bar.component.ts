import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { AppService } from "../app.service";


@Component({
  selector: 'app-nav-bar',
  template: ` 

<div style="display: flex; align-items:center justify-content:center;"> Hello {{userName}}!


<ul style="display: flex;">

  
  <li style="margin-right: 15px;">
    <a routerLink="/posts">Posts</a>
  </li>

  <li>
    <a routerLink="/likes">Likes</a>
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
