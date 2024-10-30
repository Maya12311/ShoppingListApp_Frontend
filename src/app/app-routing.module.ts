import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { SortedViaPriorityComponent } from './sorted-via-priority/sorted-via-priority.component';
import { SortedViaShoppingLocationComponent } from './sorted-via-shopping-location/sorted-via-shopping-location.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'landingPage', pathMatch: 'full'},
  {path: 'landingPage', component: LandingPageComponent},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'allProducts', component: AllProductsComponent},
  {path: 'sortedViaPriority', component: SortedViaPriorityComponent},
  {path: 'sortedViaShoppingLocation', component: SortedViaShoppingLocationComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
