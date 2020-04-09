import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'cpm-calc-currency',
  templateUrl: './cpm-calc-currency.component.html',
  styleUrls: ['./cpm-calc-currency.component.css']
})
export class CpmCalcCurrencyComponent implements OnInit {
  
 
  dateCurrency:any;
  result:number;
  currencyToday:number;
  currencyInput;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getCurrencies().subscribe((data) => {
      this.dateCurrency =  Object.create(data);
      console.log(this.dateCurrency)
    });  
  }

  calcValue(event) {
     this.currencyInput = event.target.value;
     this.result = this.currencyInput * this.dateCurrency.GBP
  }

  // calc(input){
    
  // }

  // corruncyToda(valorDoInput){
  //   uns dos valores = chama api 
  // ? como vamos chamar o tipo de moeda separadamente
  //   bloco de execução
  //   Valor da moeda * ValordoInput
  // }

}
