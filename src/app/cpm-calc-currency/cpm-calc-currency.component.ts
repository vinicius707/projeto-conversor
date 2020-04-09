import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'cpm-calc-currency',
  templateUrl: './cpm-calc-currency.component.html',
  styleUrls: ['./cpm-calc-currency.component.css']
})
export class CpmCalcCurrencyComponent implements OnInit {

  intercoin:any
  brcoin:any

  dateCurrency: any;
  result: number;
  currencyToday: number;
  currencyInput;
  rates
  objFull: any
  chooseCountry = ''
  countryFixed = 'BRL'
  defaultValue = (1.000).toFixed(3)
  dollar: number
  euro: number
  pound: number
  constructor(private currency: ApiService) { }

  ngOnInit() {
    // this.currency.getCurrencies().subscribe((data) => {
    //   this.dateCurrency =  Object.create(data);
    //   console.log(this.dateCurrency)
    // });  
    this.getCoin('USD')
    this.chooseCountry = 'USD'
  }



  getCoin(base: any) {
    this.currency.getCurrencies(base).subscribe(
      (data) => {
        this.objFull = new Object(data);

        this.dollar = this.objFull.rates.BRL
        this.euro = this.objFull.rates.BRL
        this.pound = this.objFull.rates.BRL
        this.brcoin = this.objFull.rates.BRL.toFixed(2)
        this.intercoin = this.defaultValue
      })
  }

  usdClick(event) {
    this.getCoin('USD')
    this.chooseCountry = 'USD'
    this.brcoin = this.dollar
  }

  eurClick(event) {
    this.getCoin('EUR')
    this.chooseCountry = 'EUR'
    this.brcoin = this.euro
    
  }

  gbpClick(event) {
    this.getCoin('GBP')
    this.chooseCountry = 'GBP'
    this.brcoin = this.pound
    
  }

  // Switch case  para cada opção de moeda //


  onChangeInterCoin(event) {
    this.intercoin = event.target.value
    let multiply
    switch (this.chooseCountry) {
      case 'USD':
        multiply = this.intercoin * this.dollar
        break;
      case 'EUR':
        multiply = this.intercoin * this.euro
        break;
      case 'GBP':
        multiply = this.intercoin * this.pound
        break;
    }
    this.brcoin = multiply.toFixed(2)
  }

  onChangeBrCoin(event) {
    this.brcoin = event.target.value
    let divider
    switch (this.chooseCountry) {
      case 'USD':
        divider = this.brcoin / this.dollar
        break;
      case 'EUR':
        divider = this.brcoin / this.euro
        break;
      case 'GBP':
        divider = this.brcoin / this.pound
        break;
    }
    this.intercoin = divider.toFixed(3)
  }
}



  // calcValue(event) {
  //    this.currencyInput = event.target.value;
  //    this.result = this.currencyInput * this.dateCurrency.GBP
  // }

  // calc(input){

  // }

  // corruncyToda(valorDoInput){
  //   uns dos valores = chama api 
  // ? como vamos chamar o tipo de moeda separadamente
  //   bloco de execução
  //   Valor da moeda * ValordoInput
  // }


