import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationscomponentComponent } from './notificationscomponent.component';

describe('NotificationscomponentComponent', () => {
  let component: NotificationscomponentComponent;
  let fixture: ComponentFixture<NotificationscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
