import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortBySupermarketComponent } from './sort-by-supermarket.component';

describe('SortBySupermarketComponent', () => {
  let component: SortBySupermarketComponent;
  let fixture: ComponentFixture<SortBySupermarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortBySupermarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortBySupermarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
