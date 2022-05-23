import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-sq-shop';

  outsideCount = 2000;

  card: Card = {
    id: 1,
    title: 'Tel Aviv',
    description: 'Tel Aviv has a lot of traffic',
    type: 'facebook'
  };
  someBackground = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';
  someToggle = false;
  name = 'Roee';
  who:string ='Who is up';

  constructor(private authSerivce: AuthService) {
    this.authSerivce.setUser('Eliran');
  }

  onCountChange(count: number): void {
    console.log('got count event', count);

  }

  onCardHover(id: number): void {
    console.log('the card hovered', id);

  }
}
