import { Product } from './../all-products/product';
import { DrugstoreService } from './drugstore.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { AllProductsService } from '../all-products/all-products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FindByShoppingLocationService } from './find-by-shopping-location.service';
import { compileNgModule } from '@angular/compiler';
import { OnlineService } from './online.service';
@Component({
  selector: 'app-sorted-via-shopping-location',
  templateUrl: './sorted-via-shopping-location.component.html',
  styleUrls: ['./sorted-via-shopping-location.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class SortedViaShoppingLocationComponent {


  public products?: Product[];
  public productsDrugstore?: Product[];
  public productsOnline?: Product[];
public selected: boolean= false;
nextWeek: string = "nextWeek"
nextMonth: string = "nextMonth"

public productSupermarket?: Product[];

  constructor(private shoppingService: FindByShoppingLocationService, private drugstoreService: DrugstoreService, private onlineService: OnlineService ) {}

  ngOnInit(): void {
  }

  checkboxes = {
    supermarket: false,
    drugstore: false,
    online: false
  };

  shoppingLocations = [
    {id: "🛒", name: "supermarket"},
    {id: "💊", name: "drugstore"},
    {id: "💻", name: "online"}
   ]



   changeObjectValue(){
    }


   chooseLocation(location: any){
    if(location == "supermarket"){
  this.checkboxes.supermarket = !this.checkboxes.supermarket;
  this.shoppingService.location = location
  this.findByShoppingLocation();

} else if(location == "drugstore"){
  this.checkboxes.drugstore = !this.checkboxes.drugstore;
  this.drugstoreService.location = location;

  this.drugstoreService.findByShoppingLocation().subscribe(
    (response: Product[]) => {
      this.productsDrugstore=response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message)
    }
  )
} else if(location =="online"){
  this.checkboxes.online = !this.checkboxes.online;
this.onlineService.location=location;
this.onlineService.findByShoppingLocation().subscribe(
  (response: Product[]) => {
    this.productsOnline=response;
  },
  (error: HttpErrorResponse)=> {
    alert(error.message)
  }
)
}

   }


  public findByShoppingLocation(): void {
    this.shoppingService.findByShoppingLocation().subscribe(
      (response: Product[]) => {

        this.products=response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }
}
