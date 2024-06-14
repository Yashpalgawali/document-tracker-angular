import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditregulationtypeComponent } from './editregulationtype.component';

describe('EditregulationtypeComponent', () => {
  let component: EditregulationtypeComponent;
  let fixture: ComponentFixture<EditregulationtypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditregulationtypeComponent]
    });
    fixture = TestBed.createComponent(EditregulationtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
