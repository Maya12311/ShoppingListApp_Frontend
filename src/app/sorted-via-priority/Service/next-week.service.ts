import { Injectable } from '@angular/core';
import { Product } from './../../all-products/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NextWeekService {


  private apiServerUrl = environment.apiBaseUrl;
  priority?: any;

    constructor(private http: HttpClient) {}

    public findByPriority(  ): Observable<Product[]>{
      console.log("im in service nextWeek", this.priority);

       sessionStorage.getItem('priority')
  let params1 = new HttpParams().set("priority", this.priority)
      return this.http.get<Product[]>(`${this.apiServerUrl}/findByPriority`, {params: params1})

   }}
