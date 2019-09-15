import { diplomes } from './../interfaces/diplomes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  /**
    Formations
  */
  public promos: diplomes; // JSON des promotions
  public groupes: any; // JSON des groupes de cette promotion
  public promoEdt: any; // JSON de l'EDT de cette promotion
  public currentGroup: any; // JSON du groupe choisi

  /**
    Enseignants
  */  
  public profs: any;
  public profEdt: any;

  /**
    Cours / Enseignements
  */  
  public cours: any;
  public courEdt: any;

  /**
    UEO
  */  
  public ueo: any;
  public ueoEdt: any;

  /**
    UE
  */  
  public ue: any;
  public ueEdt: any;

  /**
    Salles
  */  
  public salles: any;
  public salleEdt: any;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Récupère le JSON des promotions de l'UAPV
   */
  public getAllPromos(): any {
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/elements";
    
    this.http.get(URL).subscribe((response: any) => {
      this.promos = response.results;     
    });
  }

  /**
   * Récupère le JSON des groupes pour une promotion spécifique
   * @param promo 
   */
  public getGroupePromo(promo: string): any {
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/tdoptions/" + promo;
    
    this.http.get(URL).subscribe((response: any) => {
      this.groupes = response.results;   
      console.log(this.groupes);
              
    });
  }

  /**
   * Récupère le JSON de l'EDT pour une promotion spécifique
   * @param promo 
   */
  public getPromoEdt(promo: string): any {
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/events_promotion/" + promo;
    
    this.http.get(URL).subscribe((response: any) => {
      this.promoEdt = response.results;           
    });
  }

  /**
   * Lance la récupération des groupes ainsi que de l'EDT de la promo
   * @param promo 
   */
  public getGroupsAndEdt(promo: string) {
    this.getGroupePromo(promo);
    this.getPromoEdt(promo);
  }

  /**
   * Récupère le JSON de la liste des UEOs
   */
  public getUeo(): any {
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/matieres/UEO";
    
    this.http.get(URL).subscribe((response: any) => {
      this.ueo = response.results;           
    });
  }

  /**
   * Récupère le JSON de l'EDT de l'UEO
   */
  public getEdtUeo(code: string): any {    
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/events_matiere/" + code;
    
    this.http.get(URL).subscribe((response: any) => {
      this.ueoEdt = response.results;
      console.log(this.ueoEdt);      
    });
  }

  /**
   * Récupère le JSON de la liste des UE
   */
  public getUe(): any {
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/matieres/UE";
    
    this.http.get(URL).subscribe((response: any) => {
      this.ue = response.results;           
    });
  }

  /**
   * Récupère le JSON de l'EDT de l'UE
   */
  public getEdtUe(code: string): any {    
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/events_matiere/" + code;
    
    this.http.get(URL).subscribe((response: any) => {
      this.ueEdt = response.results;
      console.log(this.ueEdt);      
    });
  }

  /**
   * Récupère le JSON de la liste des enseignants
   */
  public getEnseignants(): any {    
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/enseignants";
    
    this.http.get(URL).subscribe((response: any) => {
      this.profs = response.results;           
    });
  }

  /**
   * Récupère le JSON de l'EDT de l'enseignant
   */
  public getEdtProf(code: string): any {    
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/events_enseignant/" + code;
    
    this.http.get(URL).subscribe((response: any) => {
      this.profEdt = response.results;
      console.log(URL);      
      console.log(this.profEdt);      
    });
  }

  /**
   * Récupère le JSON de la liste des salles
   */
  public getSalles(): any {    
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/salles";
    
    this.http.get(URL).subscribe((response: any) => {
      this.salles = response.results;
    });
  }

  /**
   * Récupère le JSON de l'EDT de la salle
   */
  public getEdtSalle(salle: string): any {    
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/events_salle/" + salle;
    
    this.http.get(URL).subscribe((response: any) => {
      this.salleEdt = response.results;
      console.log(this.salleEdt);      
    });
  }

}
