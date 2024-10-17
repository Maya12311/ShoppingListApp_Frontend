import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedViaShoppingLocationComponent } from './sorted-via-shopping-location.component';

describe('SortedViaShoppingLocationComponent', () => {
  let component: SortedViaShoppingLocationComponent;
  let fixture: ComponentFixture<SortedViaShoppingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortedViaShoppingLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortedViaShoppingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
