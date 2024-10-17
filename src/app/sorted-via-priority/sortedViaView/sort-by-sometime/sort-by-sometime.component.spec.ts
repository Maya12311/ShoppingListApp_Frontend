import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortBySometimeComponent } from './sort-by-sometime.component';

describe('SortBySometimeComponent', () => {
  let component: SortBySometimeComponent;
  let fixture: ComponentFixture<SortBySometimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortBySometimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortBySometimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
