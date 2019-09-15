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
  - [ ] EDT: https://edt-api.univ-avignon.fr/app.php/api/events_enseignant/709

- [x] Toutes les promotion: https://edt-api.univ-avignon.fr/app.php/api/elements
- [x] Tout les groupe de cette promotion: https://edt-api.univ-avignon.fr/app.php/api/tdoptions/2-L3IN
- [x] Emploi du temps de cette promotion (le filtre de groupe ce fait en local): https://edt-api.univ-avignon.fr/app.php/api/events_promotion/2-L3IN

- [ ] Fullcalendar Angular
  - [ ] Installer fullcalendar angular
  - [ ] Faire marché en fake
  - [ ] Faire marché avec les vrais EDT

- [ ] Send GET request only if internet is ON
- [ ] Faire le system de caching avec la vérification de date
- [ ] A chaque recherche enregistrer celle-ci dans une table de sorte à pouvoir savoir quelle est la recherche la plus chercher et la mêttre en tête de resultat

- [ ] Factorisé le code de sorte à utilisé un component avec un input de type function
- [ ] Mettre le lazy load des résultat de l'UI
  - [ ] Ou pagination

Packages sympas:

* https://www.npmjs.com/package/@fullcalendar/angular
* https://fullcalendar.io/docs/angular
* https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin#3-usage
* https://www.youtube.com/watch?v=uWhfwhN5IZc

TODO:

- [x] Faire un service qui regroupe toutes les variables contenant les JSON
- [x] Faire un fichier par interface