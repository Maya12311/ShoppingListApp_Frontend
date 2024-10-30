import { Injectable } from '@angular/core';
import axios from 'axios';
{axios}
@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {

    axios.defaults.baseURL= "http://localhost:8765"
    axios.defaults.headers.post["Content-type"] = "application/json"
   }

   request(method: string , url: string, data: any): Promise<any>{
    return axios({
      method: method,
      url: url,
      data: data
    })
   }
}