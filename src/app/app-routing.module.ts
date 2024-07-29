import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
  {path: '', redirectTo: 'landingPage', pathMatch: 'full'},
  {path: 'landingPage', component: LandingPageComponent},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'allProducts', component: AllProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
