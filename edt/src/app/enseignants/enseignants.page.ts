import { ApiService } from './../services/api.service';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.page.html',
  styleUrls: ['./enseignants.page.scss'],
})
export class EnseignantsPage implements OnInit {

  public searchCurrent: string = "";

  calendar = {
    currentDate: new Date(),
    mode: 'week'
  };

  constructor(
    public API: ApiService,
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    if (this.API.profs === undefined) {
      this.API.getEnseignants();
    }
  }
  
  clickClass(event) {
    console.log(event.title);   
    // this.presentPopover(event);     
  }
   
  /**
   * Renvoie si le contenu de la searchbar est présent dans le nom du prof
   * @param profName Nom du prof à check
   */
  containtSearch(profName: string) {

    /**
     * Coupe la search en array de string
     * Ensuite, retire tout les vides
     */
    let partNameSearch: Array<string> = this.searchCurrent.toLowerCase().split(" ").filter(searchPart => searchPart != "");
    
    // Vérifie si chaque mot de la recherche sont présent dans le résultat
    return partNameSearch.every(part => profName.toLowerCase().includes(part));
  }

}
