import { Product } from './../all-products/product';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-sort-by-online',
  templateUrl: './sort-by-online.component.html',
  styleUrls: ['./sort-by-online.component.css']
})
export class SortByOnlineComponent implements OnInit {

  @Input()
  online?: boolean;
  @Input()
  public prods?: Product[];

  ngOnInit(): void {
    console.log("here is sortbysupermarket", this.prods)
  }
  }
