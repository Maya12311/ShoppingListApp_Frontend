import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByOnlineComponent } from './sort-by-online.component';

describe('SortByOnlineComponent', () => {
  let component: SortByOnlineComponent;
  let fixture: ComponentFixture<SortByOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortByOnlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortByOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
