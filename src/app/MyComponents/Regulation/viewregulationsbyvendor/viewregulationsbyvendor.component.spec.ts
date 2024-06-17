import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregulationsbyvendorComponent } from './viewregulationsbyvendor.component';

describe('ViewregulationsbyvendorComponent', () => {
  let component: ViewregulationsbyvendorComponent;
  let fixture: ComponentFixture<ViewregulationsbyvendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewregulationsbyvendorComponent]
    });
    fixture = TestBed.createComponent(ViewregulationsbyvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
