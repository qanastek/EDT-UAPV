import { HttpClient } from '@angular/common/http';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fav',
  templateUrl: './add-fav.page.html',
  styleUrls: ['./add-fav.page.scss'],
})
export class AddFavPage implements OnInit {

  public searchCurrent: string = "";

  public promos: any;
  public namePromo: any;

  public groupes: any;
  public groupsSelected: any[] = [];
  public groupsSelectedName: any[] = [];
  
  public statutEmpty: boolean = false;

  constructor(
    public API: ApiService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getAllPromos();
  }
  
  getAllPromos(): any {
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/elements";
    
    this.http.get(URL).subscribe((response: any) => {
      this.promos = response.results;     
    });
  }

  getGroupePromo(code: string): any {
    var URL = "https://edt-api.univ-avignon.fr/app.php/api/tdoptions/" + code;
    
    this.http.get(URL).subscribe((response: any) => {
      this.groupes = response.results;                 
    });
  }

  goToGroups(code: string, name: string) {
    this.namePromo = name;
    this.getGroupePromo(code);
  }

  insertGroup(code: any, name: string) {

    let insideArray = this.groupsSelected.indexOf(code) == -1;
    let insideArrayName = this.groupsSelectedName.indexOf(name) == -1;

    if (insideArray) {
      this.groupsSelected.push(code);
      this.groupsSelectedName.push(name);
    } else {
      this.removeGroup(code, name);  
    }

  }

  removeGroup(code: any, name: string) {
    let index = this.groupsSelected.indexOf(code);
    let indexName = this.groupsSelectedName.indexOf(name);
    
    if (index > -1) {
      this.groupsSelected.splice(index, 1);
      this.groupsSelectedName.splice(indexName, 1);
    }
    
  }

  insertFav() {
    this.statutEmpty = true;

    var result = {
      diplome: this.namePromo,
      chips: this.groupsSelectedName,
      url: this.getGroupUrl()
    };

    console.log("New fav:");
    console.log(result);        

    this.router.navigate(["formations"]);
  }

  getGroupUrl() {

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

}