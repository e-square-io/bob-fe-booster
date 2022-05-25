import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RegisterComponent} from './register.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {EsDatePickerModule, EsInputModule} from "@es-common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: RegisterComponent}]),
    ReactiveFormsModule,
    EsInputModule,
    MatButtonModule,
    EsDatePickerModule],
  declarations: [RegisterComponent]
})
export class RegisterModule {
}
