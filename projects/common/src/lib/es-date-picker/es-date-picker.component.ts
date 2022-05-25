import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'es-es-date-picker',
  templateUrl: './es-date-picker.component.html',
  styleUrls: ['./es-date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: EsDatePickerComponent
  }]
})
export class EsDatePickerComponent implements OnInit, ControlValueAccessor,OnDestroy {
private onDestroy$ = new Subject<void>();
  formControl = new FormControl();
  onChange = (date:any) => {
  };

  constructor() {
  }


  ngOnInit(): void {
    this.registerChanges();
    this.formControl.valueChanges.subscribe(val=>{
      console.log(val);
    })
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  writeValue(obj: any): void {
    this.formControl.setValue(obj);
  }


  private registerChanges() {
    this.formControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(val=>{
      this.onChange(val);
    })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
