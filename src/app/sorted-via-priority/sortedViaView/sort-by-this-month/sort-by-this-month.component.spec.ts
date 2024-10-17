import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByThisMonthComponent } from './sort-by-this-month.component';

describe('SortByThisMonthComponent', () => {
  let component: SortByThisMonthComponent;
  let fixture: ComponentFixture<SortByThisMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortByThisMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortByThisMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
