import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from './feed.component';
import {PizzaPartyComponent, ProductComponent} from './prodcut/product.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    FeedComponent,
    ProductComponent,
    PizzaPartyComponent
  ],
  exports: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class FeedModule {

}
