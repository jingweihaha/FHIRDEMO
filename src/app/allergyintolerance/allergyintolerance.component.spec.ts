import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergyintoleranceComponent } from './allergyIntolerance.component';

describe('AllergyintoleranceComponent', () => {
  let component: AllergyintoleranceComponent;
  let fixture: ComponentFixture<AllergyintoleranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergyintoleranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergyintoleranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
