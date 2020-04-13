import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import Component
import { AppComponent } from './app.component';
import { CpmCalcCurrencyComponent } from './cpm-calc-currency/cpm-calc-currency.component'
import { CpmChartCurrencyComponent } from './cpm-chart-currency/cpm-chart-currency.component';
// Import Http Client
import {HttpClientModule} from '@angular/common/http';
// Import Service 
import { ApiService } from './api.service';
// Import Chart //
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CpmCalcCurrencyComponent,
    CpmChartCurrencyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }