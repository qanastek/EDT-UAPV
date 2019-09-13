import { diplomes } from './../interfaces/diplomes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  public diplomes: diplomes;

  constructor(
    private http: HttpClient
  ) { }

  public getDiplomes(): any {
    var diplomesUrl = "https://edt-api.univ-avignon.fr/app.php/api/elements";
    
    this.http.get(diplomesUrl).subscribe((response: any) => {
      this.diplomes = response.results;     
    });
  }

}
