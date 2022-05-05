import {Component} from '@angular/core';
import {CurrencyapidataService} from "./currencyapidata.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'converter';
  currentJson: any = [];

  base = 'UAH';
  currency2 = 'UAH'
  result: string = '1'

  changeBase(a: string) {
    this.base = a;

  }

  convertTo(b: string) {
    this.currency2 = b

  }

  constructor(private currency: CurrencyapidataService) {
  }

convert() {
  this.currency.getCurrencyData(this.base).subscribe(data => {

    this.currentJson = JSON.stringify(data);

    this.currentJson = JSON.parse(this.currentJson)
    console.log(this.currentJson)

    if (this.currency2 === 'USD') {
      this.result = this.currentJson.rates.USD
    }

    if (this.currency2 === 'UAH') {
      this.result = this.currentJson.rates.UAH
    }

    if (this.currency2 === 'EUR') {
      this.result = this.currentJson.rates.EUR
    }
  })

}
}
