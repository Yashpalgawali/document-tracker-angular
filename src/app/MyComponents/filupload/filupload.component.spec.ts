import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiluploadComponent } from './filupload.component';

describe('FiluploadComponent', () => {
  let component: FiluploadComponent;
  let fixture: ComponentFixture<FiluploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiluploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiluploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
