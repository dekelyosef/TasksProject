import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStatusComponent } from './filter-status.component';

describe('FilterStatusComponent', () => {
  let component: FilterStatusComponent;
  let fixture: ComponentFixture<FilterStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
