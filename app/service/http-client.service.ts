import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
//import { calcData } from '../calcData';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http:HttpClient) { }

  getResult(data: any){
    console.log(data);
    return this.http.post<any>(`${environment.apiBaseUrl}/predict`, data);
  }
}



