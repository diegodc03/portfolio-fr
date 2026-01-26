import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capabilites } from './capabilites';

describe('Capabilites', () => {
  let component: Capabilites;
  let fixture: ComponentFixture<Capabilites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Capabilites]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capabilites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
