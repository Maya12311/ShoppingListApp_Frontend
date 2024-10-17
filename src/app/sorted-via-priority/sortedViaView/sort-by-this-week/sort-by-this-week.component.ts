import { Product } from './../../../all-products/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sort-by-this-week',
  templateUrl: './sort-by-this-week.component.html',
  styleUrls: ['./sort-by-this-week.component.css']
})
export class SortByThisWeekComponent implements OnInit{
  @Input()
  nextWeek? : boolean;
  nextMonth?: boolean;
  sometime?: boolean;
  @Input()
  public prods?: Product[];

  ngOnInit(): void {
    console.log("here is sortbysupermarket", this.prods, this.nextWeek)
  }
}
