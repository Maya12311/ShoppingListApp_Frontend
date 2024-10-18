import { Product } from './../../../all-products/product';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-sort-by-sometime',
  templateUrl: './sort-by-sometime.component.html',
  styleUrls: ['./sort-by-sometime.component.css']
})
export class SortBySometimeComponent {
  @Input()
  sometime?: boolean;
  @Input()
  public prods?: Product[];

  ngOnInit(): void {
  }
}
