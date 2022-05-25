import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsInputComponent } from './es-input.component';

describe('EsInputComponent', () => {
  let component: EsInputComponent;
  let fixture: ComponentFixture<EsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
