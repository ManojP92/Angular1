import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingexComponent } from './data-bindingex.component';

describe('DataBindingexComponent', () => {
  let component: DataBindingexComponent;
  let fixture: ComponentFixture<DataBindingexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
