import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchPreviewComponent } from './branch-preview.component';

describe('BranchPreviewComponent', () => {
  let component: BranchPreviewComponent;
  let fixture: ComponentFixture<BranchPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
