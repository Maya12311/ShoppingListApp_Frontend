import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {
private apiServerUrl = environment.apiBaseUrl; 

  constructor(private http: HttpClient) {}


    public getAllProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.apiServerUrl}/products`)
    
   }


   
}
