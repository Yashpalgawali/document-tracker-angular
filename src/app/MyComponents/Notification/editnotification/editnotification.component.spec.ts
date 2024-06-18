import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnotificationComponent } from './editnotification.component';

describe('EditnotificationComponent', () => {
  let component: EditnotificationComponent;
  let fixture: ComponentFixture<EditnotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditnotificationComponent]
    });
    fixture = TestBed.createComponent(EditnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
