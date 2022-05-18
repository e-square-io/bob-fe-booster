import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CounterComponent implements OnInit {

  @Input() count = 0;

  @Output() countChange = new EventEmitter<number>();


  classArr = ['color-red', 'p-5'];

  classObj = {
    'color-red': true,
    'p-5': false,
  }

  styleObj = {
    'color': 'blue'
  }

  isOpen = true;

  anotherCount = 10;

  showTemplate = true;

  constructor() { }

  ngOnInit(): void {
  }

  getAnotherAnotherCount() {
    return 20;
  }

  onDecrement() {
    this.count--;
    this.countChange.emit(this.count);
  }

  onIncrement(){
    this.count++;
    this.countChange.emit(this.count);
  }
}
