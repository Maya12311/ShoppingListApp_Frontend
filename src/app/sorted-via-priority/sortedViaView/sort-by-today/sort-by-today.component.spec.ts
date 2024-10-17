import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByTodayComponent } from './sort-by-today.component';

describe('SortByTodayComponent', () => {
  let component: SortByTodayComponent;
  let fixture: ComponentFixture<SortByTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortByTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortByTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
