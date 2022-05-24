import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikesRoutingModule } from './likes-routing.module';
import { LikesComponent } from './likes.component';


@NgModule({
  declarations: [
    LikesComponent
  ],
  imports: [
    CommonModule,
    LikesRoutingModule
  ]
})
export class LikesModule { }
