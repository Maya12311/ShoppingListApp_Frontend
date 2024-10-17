import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByThisWeekComponent } from './sort-by-this-week.component';

describe('SortByThisWeekComponent', () => {
  let component: SortByThisWeekComponent;
  let fixture: ComponentFixture<SortByThisWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortByThisWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortByThisWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
