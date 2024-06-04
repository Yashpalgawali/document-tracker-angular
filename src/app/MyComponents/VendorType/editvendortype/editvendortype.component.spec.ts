import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvendortypeComponent } from './editvendortype.component';

describe('EditvendortypeComponent', () => {
  let component: EditvendortypeComponent;
  let fixture: ComponentFixture<EditvendortypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditvendortypeComponent]
    });
    fixture = TestBed.createComponent(EditvendortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
