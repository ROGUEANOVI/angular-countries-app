import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html'
})
export class SeeCountryComponent implements OnInit{

  term: string;

  country!: Country;

  constructor(private aRouter: ActivatedRoute, private countriesService: CountriesService) { 
    this.term = this.aRouter.snapshot.paramMap.get("id")!;
    console.log(this.term);
    
  }

  ngOnInit(): void {

    this.aRouter.params
      .pipe(
        switchMap(({id}) => this.countriesService.searchByCode(id))
      )
      .subscribe({
        next: res => { 
          this.country = res[0];
          console.log(this.country);
          
        },
        error: err => console.log(err)
      });

    // this.countriesService.searchByCode(this.term)
    // .subscribe({
    //   next: res => {
    //     this.country = res[0];
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });
  }
}
