import { diplomes } from './../interfaces/diplomes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  public promos: diplomes;
  public groupes: any;
  public edt: any;

  constructor(
    private http: HttpClient
  ) { }

  public getAllPromos(): any {
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/elements";
    
    this.http.get(URL).subscribe((response: any) => {
      this.promos = response.results;     
    });
  }

  public getGroupePromo(promo: string): any {
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/tdoptions/" + promo;
    
    this.http.get(URL).subscribe((response: any) => {
      this.groupes = response.results;           
    });
  }

  public getPromoEdt(promo: string): any {
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/events_promotion/" + promo;
    
    this.http.get(URL).subscribe((response: any) => {
      this.edt = response.results;           
    });
  }

  public getGroupsAndEdt(promo: string) {
    this.getGroupePromo(promo);
    this.getPromoEdt(promo);
  }

}
