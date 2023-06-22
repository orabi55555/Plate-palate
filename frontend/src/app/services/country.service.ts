import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl = 'http://localhost:7000/api/Country'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  // getCountryWithRecipes(countryId: string): Observable<any> {
  //   // const url = `${this.baseUrl}/api/Country/${countryId}/getallrecipes`;
  //   // return this.http.get<any>(url);
  //   return this.http.get(
  //     `${this.baseUrl}/api/Country/${countryId}/getallrecipes`
  //   );
  // }

  getAllCountries(): Observable<any> {
    const url = `${this.baseUrl}/countries/getall`;
    return this.http.get<any>(url);
  }

  getCountryWithRecipes(countryId: string): Observable<any> {
    console.log('getCountryWithRecipes called with country ID:', countryId);
    const url = `${this.baseUrl}/${countryId}/getallrecipes`;
    return this.http.get<any>(url);
  }
}
