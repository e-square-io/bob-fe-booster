import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, map, Subject, switchMap, takeUntil} from "rxjs";
import {CountryApiService} from "./country-api.service";

@Component({
  selector: 'es-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: AutoCompleteComponent
  }]
})
export class AutoCompleteComponent implements OnInit, ControlValueAccessor {
  filteredOptions = ['asd', 'dfdhgh', 'fdsafdasf'];
  private onDestroy$ = new Subject<void>();
  filterControl = new FormControl();
  filteredOptions$ = this.getControlValue().pipe(
    switchMap(str =>
      this.countryApiService.getCountryByName(str).pipe(
        map(arr => this.mapToSimple(arr))
      ))
  );
  onChange = (country: any) => {
  };

  constructor(private countryApiService: CountryApiService) {
  }


  ngOnInit(): void {
    this.registerChanges();
    this.filterControl.valueChanges.subscribe(val => {
      console.log(val);
    })
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.filterControl.disable() : this.filterControl.enable();
  }

  writeValue(obj: any): void {
    this.filterControl.setValue(obj);
  }


  private registerChanges() {
    this.filterControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(val => {
      this.onChange(val);
    })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  private getControlValue() {
    return this.filterControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300),
      filter(str => !!str)
    );
  }
  private mapToSimple(arr:any[]){
    return arr.map(t => t.name);
  }

  pick(value: any) {
    console.log(value);
    this.onChange(value.id);

  }
}
