import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SreadComponent } from './sread.component';

describe('SreadComponent', () => {
  let component: SreadComponent;
  let fixture: ComponentFixture<SreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
