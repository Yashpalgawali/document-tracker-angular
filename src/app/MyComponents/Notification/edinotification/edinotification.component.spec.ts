import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdinotificationComponent } from './edinotification.component';

describe('EdinotificationComponent', () => {
  let component: EdinotificationComponent;
  let fixture: ComponentFixture<EdinotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdinotificationComponent]
    });
    fixture = TestBed.createComponent(EdinotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
