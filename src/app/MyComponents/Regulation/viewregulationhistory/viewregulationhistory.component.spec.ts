import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregulationhistoryComponent } from './viewregulationhistory.component';

describe('ViewregulationhistoryComponent', () => {
  let component: ViewregulationhistoryComponent;
  let fixture: ComponentFixture<ViewregulationhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewregulationhistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewregulationhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
