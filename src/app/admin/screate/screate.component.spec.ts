import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreateComponent } from './screate.component';

describe('ScreateComponent', () => {
  let component: ScreateComponent;
  let fixture: ComponentFixture<ScreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
