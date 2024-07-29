import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  private apiService = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  sendData(data: any) : Observable<any>{
    return<Observable<any>> this.http.post(`${this.apiService}/products`, data)
  }
}
