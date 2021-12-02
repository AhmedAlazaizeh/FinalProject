import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackcomponentComponent } from './feedbackcomponent.component';

describe('FeedbackcomponentComponent', () => {
  let component: FeedbackcomponentComponent;
  let fixture: ComponentFixture<FeedbackcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
