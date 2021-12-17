import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QadummiComponent } from './qadummi.component';

describe('QadummiComponent', () => {
  let component: QadummiComponent;
  let fixture: ComponentFixture<QadummiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QadummiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QadummiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
