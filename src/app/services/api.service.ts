import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://api.weatherstack.com/current?access_key=2156de0e4d66ab7d0f90c747b04d7d6a&query=';

  constructor(
    private http: HttpClient
  ) { }

  getWeatherDetails(countryName: string){
    return this.http.get(`${this.baseUrl}`+countryName)
  }
}
