import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsDatePickerComponent } from './es-date-picker.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {MatNativeDateModule} from "@angular/material/core";



@NgModule({
  declarations: [
    EsDatePickerComponent
  ],
  exports: [
    EsDatePickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class EsDatePickerModule { }
