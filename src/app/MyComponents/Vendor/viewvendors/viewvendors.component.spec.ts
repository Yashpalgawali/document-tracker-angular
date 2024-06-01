import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvendorsComponent } from './viewvendors.component';

describe('ViewvendorsComponent', () => {
  let component: ViewvendorsComponent;
  let fixture: ComponentFixture<ViewvendorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewvendorsComponent]
    });
    fixture = TestBed.createComponent(ViewvendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
