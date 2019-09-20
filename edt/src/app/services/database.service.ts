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

  // Créer le fichier DB de SQLite et load tout
  makeAndLoadDb() {

    // Quand la plateforme (smartphone) est capable d'exécuté du code
    this.plt.ready().then(() => {

      // Créer la DB SQLite
      this.sqlite.create({
        name: 'edt-au.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;

          // Créer les tables qui compose la DB
          this.seedDatabase();
      });

    });

  }

  // Créer les tables qui compose la DB
  seedDatabase() {

    // Lecture du fichier
    this.http.get('assets/sql/seed.sql', { responseType: 'text'})
    .subscribe(sql => {

      // Exécution de la requête
      this.sqlitePorter.importSqlToDb(this.database, sql)
      .then(_ => {

        // Ensuite, insert le contenu dev dans la DB 
        this.fillInformations();

      })
      .catch(e => console.error(e));

    });

  }

  // Insert le contenu souhaité par les developpeurs
  fillInformations() {

    this.http.get('assets/sql/content.sql', { responseType: 'text' })
    .subscribe(sqlFile => {

      this.sqlitePorter.importSqlToDb(this.database, sqlFile)
      .then(_ => {

        // Récupére l'ensemble des favoris
        this.getFavorites();

        this.dbReady.next(true);

        console.log("Content perfectly imported");

      })
      .catch(e => console.error(e));

    });

  }

  // Refresh la liste des favori avec le résultat de la DB
  public getFavorites(): any {

    // La query SQL
    var sqlQuery = `      
      SELECT
        *
      FROM
        favorites
      ;
    `;

    // Lance la requête sur la DB
    return this.database.executeSql(sqlQuery, [])
    .then(data => {

      // Créer une array temporaire qui stockera tout les favoris dans la DB
      var arrayTemp: Array<FavoriteRead> = [];

      // Pour chaque favori de la DB
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

  // Insert le favori saisie par le client dans la DB
  public addFav(
    fav: Favorite
  ): any {

    // La query de insert
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

    // Lance cette requête sur la DB
    this.database.executeSql(SqlQuery, [])
    .then(() => {

      // Refresh la liste des favori avec le résultat de la DB
      this.getFavorites();

      // Redirige
      this.router.navigate(['formations']);

    })
    .catch(e => console.error(e));

  }

  // Groupes (chips) to String
  collaspechips(chips: Array<string>) {
    let output = "";

    // Pour chaque groupe
    for (let i = 0; i < chips.length; i++) {

      // Le coller à la string
      output += chips[i];

      // Et si il n'est pas à la fin alors mettre une tilde pour permettre par la suite le splite
      if (i < chips.length - 1) {
        output += "~";       
      }   

    }
    
    return output;
  }

}
