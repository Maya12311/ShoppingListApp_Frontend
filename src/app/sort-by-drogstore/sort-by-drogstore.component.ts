import { Product } from './../all-products/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-by-drogstore',
  templateUrl: './sort-by-drogstore.component.html',
  styleUrls: ['./sort-by-drogstore.component.css']
})
export class SortByDrogstoreComponent implements OnInit {

  @Input()
drugstore?: boolean;
@Input()
public prods?: Product[];

ngOnInit(): void {
  console.log(this.drugstore, "is it changing?");

  console.log("im in sortbydrugstore", this.prods)
}



}
