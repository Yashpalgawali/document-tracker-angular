import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddregulationComponent } from './addregulation.component';

describe('AddregulationComponent', () => {
  let component: AddregulationComponent;
  let fixture: ComponentFixture<AddregulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddregulationComponent]
    });
    fixture = TestBed.createComponent(AddregulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
