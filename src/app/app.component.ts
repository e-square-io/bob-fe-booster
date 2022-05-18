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

  onCountChange(count: number): void {
    console.log('got count event', count);
    
  }

  onCardHover(id: number): void {
    console.log('the card hovered', id);
    
  }
}
