import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudAttendanceComponent } from './stud-attendance.component';

describe('StudAttendanceComponent', () => {
  let component: StudAttendanceComponent;
  let fixture: ComponentFixture<StudAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
