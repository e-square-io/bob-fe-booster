import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsInputComponent } from './es-input.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    EsInputComponent
  ],exports: [
    EsInputComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class EsInputModule { }
