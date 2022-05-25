import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ValidatorFn} from "@angular/forms";
import {MatFormFieldAppearance} from "@angular/material/form-field/form-field";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'es-input',
  templateUrl: './es-input.component.html',
  styleUrls: ['./es-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: EsInputComponent
    }
  ]
})
export class EsInputComponent implements OnInit, ControlValueAccessor, OnDestroy {
  private onDestroy$ = new Subject<void>();

  formControl = new FormControl();
  // public valueChanges$:Observable<string> = this.formControl.valueChanges.pipe(tap(value => this.onChange(value)));
  error = {
    email: 'Please enter a valid email address',
    required: 'Value is required',
    phone: 'Please enter a valid phone number(XXX-XXXXXXXX)',
    minLength: 'min length is'
  };
  @Input() label!: string;
  @Input() hint!: string;
  @Input() name!: string;
  @Input() type = 'text';
  @Input() placeholder!: string;
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() validators: ValidatorFn[] = []
  onChange = (value: any) => {
  };

  constructor() {
  }

  ngOnInit(): void {
    this.setValidators();
    this.registerFormChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  writeValue(obj: any): void {
    this.formControl.setValue(obj);
  }

  private registerFormChanges() {
    this.formControl.valueChanges.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(value => {
      this.onChange(value)
    }
  )

  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  private setValidators() {
    if(this.validators?.length){
      this.formControl.setValidators(this.validators);
    }
  }
}
