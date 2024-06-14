import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregulationtypesComponent } from './viewregulationtypes.component';

describe('ViewregulationtypesComponent', () => {
  let component: ViewregulationtypesComponent;
  let fixture: ComponentFixture<ViewregulationtypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewregulationtypesComponent]
    });
    fixture = TestBed.createComponent(ViewregulationtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
