import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html'
})
export class CapitalComponent {

  
  term:string = "";

  isError: boolean = false;

  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  search(term: string){
    this.isError= false;
    this.term = term; 

    this.countriesService.searchByCapital(this.term)
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
