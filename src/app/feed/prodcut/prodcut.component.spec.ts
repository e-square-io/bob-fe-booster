import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutComponent } from './prodcut.component';

describe('ProdcutComponent', () => {
  let component: ProdcutComponent;
  let fixture: ComponentFixture<ProdcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
