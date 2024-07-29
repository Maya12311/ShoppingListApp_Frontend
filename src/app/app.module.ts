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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductService } from './add-product/add-product.service';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    HeaderComponent,
    LandingPageComponent,
    AddProductComponent,
    AllProductsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [AllProductsService, AddProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
