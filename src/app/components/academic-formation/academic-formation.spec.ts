import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicFormation } from './academic-formation';

describe('AcademicFormation', () => {
  let component: AcademicFormation;
  let fixture: ComponentFixture<AcademicFormation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicFormation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicFormation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
