import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { ProdcutComponent } from './prodcut/prodcut.component';



@NgModule({
  declarations: [
    FeedComponent,
    ProdcutComponent
  ],
  exports: [
    FeedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeedModule { }
