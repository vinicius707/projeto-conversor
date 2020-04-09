import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = "https://api.exchangeratesapi.io/latest?base=BRL";

  constructor(private http: HttpClient) { }

  getCurrencies(){
    return this.http.get(this.apiUrl);
  }

}
