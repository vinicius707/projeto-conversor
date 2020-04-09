import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = "https://api.exchangeratesapi.io/latest?base=";

  constructor(private http: HttpClient) { }

  getCurrencies(base:any){
    let currency = this.apiUrl+base
    return this.http.get(currency);
  }

}
