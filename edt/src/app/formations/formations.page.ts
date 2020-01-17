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

    this.API.loading();

    // Requête de récupération de l'EDT 
    this.http.get(URL).subscribe((response: any) => {

      if (response.status == 0) {
        console.log("Server doesnt response -------------");
        this.API.loadingModal.dismiss();
        // Error message: Server unvailables
      } else {

        this.API.edtSelected = response.results;
  
        this.API.loadingModal.dismiss();
        
        // Redirection vers l'EDT
        this.router.navigate(["edt", "formations"]);
      } 
    });   

  }

  addFav() {
    // Avance sans injecter dans le stack du router
    this.router.navigate(["add-fav"], { skipLocationChange: true });
  }

  doRefresh(event) {
    setTimeout(() => {

      if (this.tab === 0) {
        this.DB.getFavorites();        
      }
      else if (this.tab === 1) {
        this.API.getAllPromos();        
      }

      event.target.complete();      
    }, 1000);
  }

}
