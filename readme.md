# New Visual Studio Shortcuts

* Write /** and press TAB | It's make a javadocs style comment with param and returns

# Liste des requêtes

* Statut du serveur: https://edt-api.univ-avignon.fr/app.php/api/isOpen

- [x] Liste des Salles: https://edt-api.univ-avignon.fr/app.php/api/salles
  - [x] EDT salle: https://edt-api.univ-avignon.fr/app.php/api/events_salle/CERI_STAT1
- [x] Liste des UEO: https://edt-api.univ-avignon.fr/app.php/api/matieres/UEO
  - [x] EDT: https://edt-api.univ-avignon.fr/app.php/api/events_matiere/T-U12-9208
- [x] Liste des UE: https://edt-api.univ-avignon.fr/app.php/api/matieres/UE
  - [x] EDT: https://edt-api.univ-avignon.fr/app.php/api/events_matiere/I-E05-5034
- [x] Liste des Enseignants: https://edt-api.univ-avignon.fr/app.php/api/enseignants
  - [x] EDT: https://edt-api.univ-avignon.fr/app.php/api/events_enseignant/709

- [x] Toutes les promotion: https://edt-api.univ-avignon.fr/app.php/api/elements
- [x] Tout les groupe de cette promotion: https://edt-api.univ-avignon.fr/app.php/api/tdoptions/2-L3IN
- [x] Emploi du temps de cette promotion (le filtre de groupe ce fait en local): https://edt-api.univ-avignon.fr/app.php/api/events_promotion/2-L3IN
- [x] https://edt-api.univ-avignon.fr/app.php/api/events_tdoption/9756-9757-9758-9759-9761-9753-9754-9755

- [x] Remplacer la search bar de groupe pour des checkbox de sortent à pouvoir afficher plusieurs groupes à la fois

- [x] Fullcalendar Angular
  - [x] Installer fullcalendar angular
  - [x] Faire marché en fake
  - [x] Faire marché avec les vrais EDT

- [ ] Send GET request only if internet is ON
- [ ] Faire le system de caching avec la vérification de date
- [ ] A chaque recherche enregistrer celle-ci dans une table de sorte à pouvoir savoir quelle est la recherche la plus chercher et la mêttre en tête de resultat

- [ ] Factorisé le code de sorte à utilisé un component avec un input de type function
- [ ] Mettre le lazy load des résultat de l'UI
  - [ ] Ou pagination
  - [ ] Ou plutot: ion-infinite-scroll
- [ ] Faire PWA
- [ ] Ajouter popup
- [ ] Ajouter cours restants avant la fin de l'année

- [ ] Jeter un coup d'oeil à nebular

Packages sympas:

* https://www.npmjs.com/package/@fullcalendar/angular
* https://fullcalendar.io/docs/angular
* https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin#3-usage
* https://www.youtube.com/watch?v=uWhfwhN5IZc
* https://www.npmjs.com/package/angular2-fullcalendar

* https://www.npmjs.com/package/ionic2-calendar
* https://www.youtube.com/watch?v=uWhfwhN5IZc

TODO:

- [x] Faire un service qui regroupe toutes les variables contenant les JSON
- [x] Faire un fichier par interface
- [x] Fix calendar height
- [x] Faire le remove()
- [ ] Ajouter les buttons:
  - [x] Day
  - [x] Week
  - [x] Month
  - [ ] Today
- [ ] Supprimmer la section "all day"
- [ ] Faire le onClick pour les EDT
- [ ] Mettre une animation "shake" quand il n'y à pas de edt après changement