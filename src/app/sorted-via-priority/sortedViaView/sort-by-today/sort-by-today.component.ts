import { Product } from './../../../all-products/product';
import { Component, OnInit , Input} from '@angular/core';
@Component({
  selector: 'app-sort-by-today',
  templateUrl: './sort-by-today.component.html',
  styleUrls: ['./sort-by-today.component.css']
})
export class SortByTodayComponent implements OnInit{

  @Input()
today?: boolean;
nextWeek? : boolean;
nextMonth?: boolean;
sometime?: boolean;
@Input()
public prods?: Product[];

ngOnInit(): void {
  console.log("here is sortbysupermarket", this.prods)
}
}
