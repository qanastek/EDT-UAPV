import { FavoriteRead } from './../interfaces/favorite-read';
import { Favorite } from './../interfaces/favorite';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public favorites: Array<Favorite>; 

  constructor(
    private plt: Platform,
    private sqlitePorter: SQLitePorter,
    private sqlite: SQLite,
    private http: HttpClient,
    private router: Router
  ) {
    this.makeAndLoadDb();
  }

  makeAndLoadDb() {

    this.plt.ready().then(() => {

      this.sqlite.create({
        name: 'edt-au.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });

    });

  }

  seedDatabase() {

    // Recherche du fichier
    this.http.get('assets/sql/seed.sql', { responseType: 'text'})
    .subscribe(sql => {

      // Lecture du fichier
      this.sqlitePorter.importSqlToDb(this.database, sql)
      .then(_ => {

        this.fillInformations();

      })
      .catch(e => console.error(e));

    });

  }

  fillInformations() {

    this.http.get('assets/sql/content.sql', { responseType: 'text' })
    .subscribe(sqlFile => {

      this.sqlitePorter.importSqlToDb(this.database, sqlFile)
      .then(_ => {

        // Récupére l'ensemble des quêtes
        this.getFavorites();

        this.dbReady.next(true);

        console.log("Content perfectly imported");

      })
      .catch(e => console.error(e));

    });

  }

  public getFavorites(): any {

    var sqlQuery = `      
      SELECT
        *
      FROM
        favorites
      ;
    `;

    return this.database.executeSql(sqlQuery, [])
    .then(data => {
      var arrayTemp: Array<FavoriteRead> = [];

      for (let i = 0; i < data.rows.length; i++) {
        arrayTemp.push({
          id: data.rows.item(i).id,
          diplome: data.rows.item(i).diplome,
          url: data.rows.item(i).url,
          chips: data.rows.item(i).chips.split('~')
        });
      }

      this.favorites = arrayTemp;
      
    })
    .catch(e => console.error(e));

  }

  public addFav(
    fav: Favorite
  ): any {

    let SqlQuery = `
      INSERT or IGNORE INTO
        favorites
      (
        diplome,
        url,
        chips
      )
      VALUES(
        "${fav.diplome}",
        "${fav.url}",
        "${this.collaspechips(fav.chips)}"
      )
      ;
    `;

    console.log(SqlQuery);

    this.database.executeSql(SqlQuery, [])
    .then(() => {
      // Refresh la DB
      this.getFavorites();
      this.router.navigate(['formations']);
    })
    .catch(e => console.error(e));

  }

  collaspechips(chips: Array<string>) {
    let output = "";

    for (let i = 0; i < chips.length; i++) {

      output += chips[i];

      if (i < chips.length - 1) {
        output += "~";       
      }   

    }
    
    return output;

  }


}
