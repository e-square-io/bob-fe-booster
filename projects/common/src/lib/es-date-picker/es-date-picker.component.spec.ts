import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsDatePickerComponent } from './es-date-picker.component';

describe('EsDatePickerComponent', () => {
  let component: EsDatePickerComponent;
  let fixture: ComponentFixture<EsDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
