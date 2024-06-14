import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddregulationtypeComponent } from './addregulationtype.component';

describe('AddregulationtypeComponent', () => {
  let component: AddregulationtypeComponent;
  let fixture: ComponentFixture<AddregulationtypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddregulationtypeComponent]
    });
    fixture = TestBed.createComponent(AddregulationtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
