import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByDrogstoreComponent } from './sort-by-drogstore.component';

describe('SortByDrogstoreComponent', () => {
  let component: SortByDrogstoreComponent;
  let fixture: ComponentFixture<SortByDrogstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortByDrogstoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortByDrogstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
