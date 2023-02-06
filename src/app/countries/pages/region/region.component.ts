import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html'
})
export class RegionComponent {

  term:string = "";

  isError: boolean = false;

  activeRegion: string = "";

  regions: string[]= [ "africa", "americas", "asia", "europe", "oceania"];

  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  search(term: string){
    
    this.isError= false;
    this.term = term; 

    this.countriesService.searchByRegion(this.term)
      .subscribe({
        next: res => {
          this.countries = res;
          this.activeRegion = res[0].region;
        },
        error: err => {
          this.isError = true;
          this.countries = [];
        }
      });
  }

  regionActivate(region: string){
    this.activeRegion = region;
    this.countriesService.searchByRegion(this.activeRegion)
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

  getClassCSS(region: string): string {
    return (region === this.activeRegion)? 'btn btn-primary' : 'btn btn-outline-primary'
  }
}
