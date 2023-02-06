import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  get httpParams(){
    return new HttpParams().set("fields","name,capital,region,population,flags,flag,cca3");
  }

  constructor(private readonly http: HttpClient) { }

  searchByCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  searchByRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
  
  searchByCode(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${term}`;
    return this.http.get<Country[]>(url);
  }
}
