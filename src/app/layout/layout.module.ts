import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'login', loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule)}
    ])
  ]
})
export class LayoutModule { }
