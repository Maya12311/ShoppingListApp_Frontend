import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../all-products/product';

@Component({
  selector: 'app-sort-by-supermarket',
  templateUrl: './sort-by-supermarket.component.html',
  styleUrls: ['./sort-by-supermarket.component.css']
})
export class SortBySupermarketComponent implements OnInit{
@Input()
supermarket?: boolean;
@Input()
public prods?: Product[];

ngOnInit(): void {
  console.log("here is sortbysupermarket", this.prods)
}
}
