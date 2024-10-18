import { Product } from './../../../all-products/product';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-sort-by-this-month',
  templateUrl: './sort-by-this-month.component.html',
  styleUrls: ['./sort-by-this-month.component.css']
})
export class SortByThisMonthComponent {
  @Input()
  nextMonth?: boolean;
  @Input()
  public prods?: Product[];

  ngOnInit(): void {
  }
}
