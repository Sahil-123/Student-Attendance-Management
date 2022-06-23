import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreadComponent } from './pread.component';

describe('PreadComponent', () => {
  let component: PreadComponent;
  let fixture: ComponentFixture<PreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
