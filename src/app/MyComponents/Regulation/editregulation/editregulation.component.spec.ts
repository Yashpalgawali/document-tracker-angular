import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditregulationComponent } from './editregulation.component';

describe('EditregulationComponent', () => {
  let component: EditregulationComponent;
  let fixture: ComponentFixture<EditregulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditregulationComponent]
    });
    fixture = TestBed.createComponent(EditregulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
