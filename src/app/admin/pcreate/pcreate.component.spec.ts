import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcreateComponent } from './pcreate.component';

describe('PcreateComponent', () => {
  let component: PcreateComponent;
  let fixture: ComponentFixture<PcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
