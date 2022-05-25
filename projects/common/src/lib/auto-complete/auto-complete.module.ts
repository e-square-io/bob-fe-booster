import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AutoCompleteComponent} from './auto-complete.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AutoCompleteComponent],
  exports: [AutoCompleteComponent],
  imports: [CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    HttpClientModule]
})
export class AutoCompleteModule {
}
