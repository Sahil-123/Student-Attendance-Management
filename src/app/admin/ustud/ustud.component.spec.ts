import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstudComponent } from './ustud.component';

describe('UstudComponent', () => {
  let component: UstudComponent;
  let fixture: ComponentFixture<UstudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UstudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
