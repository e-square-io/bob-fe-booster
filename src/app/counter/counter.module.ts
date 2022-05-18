import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { CounterItemComponent } from './counter-item/counter-item.component';



@NgModule({
  declarations: [
    CounterComponent,
    CounterItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CounterComponent, CounterItemComponent]
})
export class CounterModule { }
