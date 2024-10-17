import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AllProductsService } from './all-products.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  public products?: Product[]; 
  nextWeek: string = "nextWeek"
nextMonth: string = "nextMonth"

  constructor(private productService: AllProductsService ) {}

  ngOnInit(): void {
    this.getAllProducts(); 
  }

  public getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (response : Product[]) =>{
        this.products= response; 
      },
      (error : HttpErrorResponse)=>{
        alert(error.message); 
      }
    )
  }

}
