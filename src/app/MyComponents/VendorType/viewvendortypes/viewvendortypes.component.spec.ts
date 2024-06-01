import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvendortypesComponent } from './viewvendortypes.component';

describe('ViewvendortypesComponent', () => {
  let component: ViewvendortypesComponent;
  let fixture: ComponentFixture<ViewvendortypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewvendortypesComponent]
    });
    fixture = TestBed.createComponent(ViewvendortypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
