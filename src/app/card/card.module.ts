import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { PermissionModule } from '../permission/permission.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    PermissionModule,
  ],
  exports: [CardComponent]
})
export class CardModule { }
