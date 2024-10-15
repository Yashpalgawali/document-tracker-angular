import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewchangepasswordComponent } from './newchangepassword.component';

describe('NewchangepasswordComponent', () => {
  let component: NewchangepasswordComponent;
  let fixture: ComponentFixture<NewchangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewchangepasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewchangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
