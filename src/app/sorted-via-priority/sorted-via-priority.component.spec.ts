import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedViaPriorityComponent } from './sorted-via-priority.component';

describe('SortedViaPriorityComponent', () => {
  let component: SortedViaPriorityComponent;
  let fixture: ComponentFixture<SortedViaPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortedViaPriorityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortedViaPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
