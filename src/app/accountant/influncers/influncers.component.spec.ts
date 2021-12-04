import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluncersComponent } from './influncers.component';

describe('InfluncersComponent', () => {
  let component: InfluncersComponent;
  let fixture: ComponentFixture<InfluncersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluncersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluncersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
