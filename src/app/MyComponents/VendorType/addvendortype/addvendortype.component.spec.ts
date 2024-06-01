import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvendortypeComponent } from './addvendortype.component';

describe('AddvendortypeComponent', () => {
  let component: AddvendortypeComponent;
  let fixture: ComponentFixture<AddvendortypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddvendortypeComponent]
    });
    fixture = TestBed.createComponent(AddvendortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
