import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelFather } from './expansion-panel-father';

describe('ExpansionPanelFather', () => {
  let component: ExpansionPanelFather;
  let fixture: ComponentFixture<ExpansionPanelFather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionPanelFather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionPanelFather);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
