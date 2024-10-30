import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AllProductsService } from './all-products/all-products.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductService } from './add-product/add-product.service';
import { FormsModule } from '@angular/forms';
import { SortedViaPriorityComponent } from './sorted-via-priority/sorted-via-priority.component';
import { SortedViaShoppingLocationComponent } from './sorted-via-shopping-location/sorted-via-shopping-location.component';
import { SortBySupermarketComponent } from './sort-by-supermarket/sort-by-supermarket.component';
import { SortByDrogstoreComponent } from './sort-by-drogstore/sort-by-drogstore.component';
import { FindByShoppingLocationService } from './sorted-via-shopping-location/find-by-shopping-location.service';
import { DrugstoreService } from './sorted-via-shopping-location/drugstore.service';
import { SortByOnlineComponent } from './sort-by-online/sort-by-online.component';
import { SortByTodayComponent } from './sorted-via-priority/sortedViaView/sort-by-today/sort-by-today.component';
import { SortByThisWeekComponent } from './sorted-via-priority/sortedViaView/sort-by-this-week/sort-by-this-week.component';
import { SortByThisMonthComponent } from './sorted-via-priority/sortedViaView/sort-by-this-month/sort-by-this-month.component';
import { SortBySometimeComponent } from './sorted-via-priority/sortedViaView/sort-by-sometime/sort-by-sometime.component';
import { AuthContentComponent } from './auth-content/auth-content.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    HeaderComponent,
    LandingPageComponent,
    AddProductComponent,
    AllProductsComponent,
    SortedViaPriorityComponent,
    SortedViaShoppingLocationComponent,
    SortBySupermarketComponent,
    SortByDrogstoreComponent,
    SortByOnlineComponent,
    SortByTodayComponent,
    SortByThisWeekComponent,
    SortByThisMonthComponent,
    SortBySometimeComponent,
    AuthContentComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [AllProductsService, AddProductService, FindByShoppingLocationService, DrugstoreService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
