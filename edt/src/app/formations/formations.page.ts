import { DatabaseService } from './../services/database.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage implements OnInit {

  public searchCurrent: string = "";
  public tab: number = 0;

  public testFavoris = [
    {
      diplome: "l3 informatique",
      chips: [
        "l3info_td1",
        "l3info_td2",
        "l3info_td3"
      ],
      url: "https://edt-api.univ-avignon.fr/app.php/api/events_tdoption/9756-9757-9758-9759-9761-9753-9754-9755"
    }
  ]

  // eventSource = this.API.loadCalendar(this.API.edtSelected);
  eventSource = [];

  constructor(
    public API: ApiService,
    public popoverController: PopoverController,
    public router: Router,
    private http: HttpClient,
    public DB: DatabaseService
  ) { }

  ngOnInit() {
    this.API.getAllPromos();
  }

  ngOnDestroy(): void {
  }

  goToGroups(code: any) {
    this.searchCurrent = '';
    this.API.getGroupePromo(code);
        
    this.router.navigate(["groups"]);
  }

  showAll() {
    // this.tab = 0;
  }

  loadEdt(URL: string) {

    // Requête de récupération de l'EDT 
    this.http.get(URL).subscribe((response: any) => {
      this.API.edtSelected = response.results;

      // Redirection vers l'EDT
      this.router.navigate(["edt", "formations"]);     
    });   

  }

  addFav() {
    this.router.navigate(["add-fav"]);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.DB.getFavorites();
      event.target.complete();
    }, 2000);
  }

}
