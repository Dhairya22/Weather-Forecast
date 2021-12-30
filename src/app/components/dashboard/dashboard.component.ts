import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  weatherForm!: FormGroup;
  weatherData: any = [];
  ferenheitTemp: any;

  public d = new Date();
  day: any;
  todayDate: any;
  todayTime: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.prepareForm();

    this.day = this.d.getDay();
    this.todayDate = this.d.getDate();
    this.todayTime = (this.d.getHours());
    console.log("🚀 ~ file: dashboard.component.ts ~ line 30 ~ DashboardComponent ~ ngOnInit ~ this.todayTime", this.todayTime)
  }

  prepareForm(){
    this.weatherForm = new FormGroup({
      countryName: new FormControl('',Validators.required)
    })
  }

  getWeatherDetails(){
    const { countryName } = this.weatherForm.getRawValue();

    this.apiService.getWeatherDetails(countryName).subscribe(response => {
      this.weatherData = response;
      console.log("🚀 ~ file: dashboard.component.ts ~ line 34 ~ DashboardComponent ~ this.apiService.getWeatherDetails ~ this.weatherData", this.weatherData);
      if(this.weatherData){
        // (16°C × 9/5) + 32
        this.ferenheitTemp = (((this.weatherData.current.temperature) * (9/5)) + 32);
      }
    })
  }

}
