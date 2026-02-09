import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosPortfolio } from './photos-portfolio';

describe('PhotosPortfolio', () => {
  let component: PhotosPortfolio;
  let fixture: ComponentFixture<PhotosPortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosPortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosPortfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
