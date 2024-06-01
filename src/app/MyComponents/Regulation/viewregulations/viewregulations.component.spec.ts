import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregulationsComponent } from './viewregulations.component';

describe('ViewregulationsComponent', () => {
  let component: ViewregulationsComponent;
  let fixture: ComponentFixture<ViewregulationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewregulationsComponent]
    });
    fixture = TestBed.createComponent(ViewregulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
