import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface diplomes {
  results: Array<section>
}

interface section {
  letter: string,
  names: Array<diplome>
}

interface diplome {
  name: string,
  code: string,
  searchString: string
}

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage implements OnInit {

  public diplomes: diplomes;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getDiplomes();
  }

  getDiplomes(): any {
    var diplomesUrl = "https://edt-api.univ-avignon.fr/app.php/api/elements";
    
    this.http.get(diplomesUrl).subscribe((response: any) => {
        this.diplomes = response.results;
        console.log(this.diplomes);        
    });
  }

  onChange() {
    
  }

}
