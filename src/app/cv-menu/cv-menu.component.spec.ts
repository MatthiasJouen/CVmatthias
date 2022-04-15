import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvMenuComponent } from './cv-menu.component';

describe('CvMenuComponent', () => {
  let component: CvMenuComponent;
  let fixture: ComponentFixture<CvMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
