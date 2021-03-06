import { diplomes } from './../interfaces/diplomes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';

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
  public groupsSelected: any[] = []; // JSON des groupes choisis
  public urlSelected: string; // URL de l'emploi du temps
  public edtSelected: any; // L'emploi du temps des groupes selected

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

  /**
   * Loading modal
   */
  public loadingModal: any;

  constructor(
    private http: HttpClient,
    public router: Router,
    private loadingController: LoadingController,
    private plt: Platform
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
   * @param code 
   */
  public getGroupePromo(code: string): any {
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/tdoptions/" + code;
    
    this.http.get(URL).subscribe((response: any) => {
      this.groupes = response.results;                 
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
      this.router.navigate(["edt", "ueo"]);
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
      this.router.navigate(["edt", "ue"]);
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
      this.router.navigate(["edt", "profs"]);
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
      this.router.navigate(["edt", "salles"]);
    });
  }

  public removeGroup(code: any) {
    let index = this.groupsSelected.indexOf(code);
    
    if (index > -1) {
      this.groupsSelected.splice(index, 1);
    }
    
  }

  public insertGroup(code: any) {

    let insideArray = this.groupsSelected.indexOf(code) == -1;

    if (insideArray) {
      this.groupsSelected.push(code);
    } else {
      this.removeGroup(code);  
    }

  }

  private getGroupUrl() {

    // URL sans groupes
    let URL = "https://edt-api.univ-avignon.fr/app.php/api/events_tdoption/";
    
    var groups = "";

    // Add each groups to to string
    for (let i = 0; i < this.groupsSelected.length; i++) {

      groups += this.groupsSelected[i];

      // If isnt the last group
      if (i !== this.groupsSelected.length - 1) {
        groups += "-";
      }

    }
    
    // Complété l'URL
    URL += groups;
    return URL;
  }

  public getGroupsEdt() {
    // Récupère l'URL qui nous permettras de faire la requête de récupération de l'EDT
    let URL = this.getGroupUrl();
    
    if (URL && this.groupsSelected.length > 0) {

      // TODO: Enlevé peut etre
      this.urlSelected = URL; 
      console.log(this.urlSelected); 

      // Requête de récupération de l'EDT 
      this.http.get(URL).subscribe((response: any) => {
        this.edtSelected = response.results;  

        // Redirection vers l'EDT
        this.router.navigate(["edt", "formations"]);     
      });   
    }
    
  }

  public loadCalendar(edt: any) {

    var send = [];
    
    var color: string;
    var borderColor: string;
    var textColor: string;

    edt.forEach(item => {

      switch (item.type) {

        case "UEO":
          color = "rgb(141, 213, 142)";
          borderColor = "rgb(141, 213, 142)";
          textColor = "#ffffff";
          break;

        case "Annulation":
          color = "#eaeef2";
          borderColor = "#eaeef2";
          textColor = "#b2b2b2";
          break;

        case "Evaluation":
          color = "#ef5151";
          borderColor = "#ef5151";
          textColor = "#ffffff";
          break;
      
        default:
          color = "#d1e8ff"; 
          borderColor = "#d1e8ff"; 
          textColor = "#1e90ff"; 
          break;
      }

      send.push({
        id: "",
        groupId: "",
        allDay: false,
        backgroundColor: color,
        borderColor: borderColor,
        textColor: textColor,
        title: item.title,
        start: new Date(item.start),
        end: new Date(item.end),
        allDayDefault: false,
        editable: false,
        startEditable: false,
        durationEditable: false,
        resourceEditable: false,
        extendedProps: {
          description: item.memo,
          type: item.type
        }
      });
      
    });

    // return send.slice(0, 15);
    return send;
  }

  public async loading() {
    this.loadingModal = await this.loadingController.create({
      // spinner: null,
      // duration: 5000,
      message: "Récupération de l'EDT...",
      // translucent: true,
      cssClass: 'custom-class custom-loading'
    });

    return await this.loadingModal.present();
  }

}
