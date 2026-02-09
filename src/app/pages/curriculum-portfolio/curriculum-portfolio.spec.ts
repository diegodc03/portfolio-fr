import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumPortfolio } from './curriculum-portfolio';

describe('CurriculumPortfolio', () => {
  let component: CurriculumPortfolio;
  let fixture: ComponentFixture<CurriculumPortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculumPortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumPortfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
