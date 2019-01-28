import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationstatementComponent } from './medicationstatement.component';

describe('MedicationstatementComponent', () => {
  let component: MedicationstatementComponent;
  let fixture: ComponentFixture<MedicationstatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationstatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
