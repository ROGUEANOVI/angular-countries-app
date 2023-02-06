import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles:[
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class CountryComponent {

  term:string = "";

  isError: boolean = false;

  countries: Country[] = [];

  suggestedCountries: Country[] = [];

  constructor(private countriesService: CountriesService) { }


  suggestions(term: string){
    this.isError = false;
    this.countriesService.searchByCountry(term)
    .subscribe({
      next: res => {
        this.suggestedCountries = res.splice(0, 5);
      },
      error: err => {
        this.isError = true;
        this.suggestedCountries = [];
      }
    });
  }

  search(term: string){
    this.isError= false;
    this.term = term; 

    this.countriesService.searchByCountry(this.term)
      .subscribe({
        next: res => {
          this.countries = res;
        },
        error: err => {
          this.isError = true;
          this.countries = [];
        }
      });
  }

}
