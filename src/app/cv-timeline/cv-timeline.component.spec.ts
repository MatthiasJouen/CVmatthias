import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTimelineComponent } from './cv-timeline.component';

describe('CvTimelineComponent', () => {
  let component: CvTimelineComponent;
  let fixture: ComponentFixture<CvTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
