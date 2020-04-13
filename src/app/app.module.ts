import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Component
import { AppComponent } from './app.component';
import { CpmCalcCurrencyComponent } from './cpm-calc-currency/cpm-calc-currency.component'

// Import Http Client
import {HttpClientModule} from '@angular/common/http';

// Import Service 
import { ApiService } from './api.service';
import { CpmNavigationComponent } from './cpm-navigation/cpm-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    CpmCalcCurrencyComponent,
    CpmNavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }