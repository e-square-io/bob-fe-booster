import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card | null = null;

  @Output() cardHover = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }
  onMouseenter(): void {
    if (!this.card) {
return;
    }
    this.cardHover.emit(this.card.id);
  }
}
