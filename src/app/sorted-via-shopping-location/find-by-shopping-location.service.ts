import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../all-products/product';
import { environment } from 'src/environment/environment';
import { any } from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class FindByShoppingLocationService {
  private apiServerUrl = environment.apiBaseUrl;
location?: any;

  constructor(private http: HttpClient) {}

  public findByShoppingLocation(  ): Observable<Product[]>{
     sessionStorage.getItem('shoppingLocation')
let params1 = new HttpParams().set("shoppingLocation", this.location)
    return this.http.get<Product[]>(`${this.apiServerUrl}/findByShoppingLocation`, {params: params1})

 }

 

}
