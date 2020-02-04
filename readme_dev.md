# Emploi du temps pour l'université d'Avignon - V1

# Liste des requêtes à l'API de l'UAPV

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

- [ ] Jeter un coup d'oeil à nebular

## Packages sympas:

* https://www.npmjs.com/package/ionic2-calendar
* https://www.youtube.com/watch?v=uWhfwhN5IZc

* https://fullcalendar.io/docs/angular
* https://stackblitz.com/edit/fullcalendar-angular-demo
* https://github.com/mattlewis92/angular-calendar

# Fix calendar issue

* https://github.com/fullcalendar/fullcalendar-angular/issues/195

# Make APK

> keytool -genkey -v -keystore my-release-key.keystore -alias qanastek -keyalg RSA -keysize 2048 -validity 10000
> jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore app-release-unsigned.apk qanastek
> cd C:\xampp2\htdocs\other_things\EDT-UAPV\edt\platforms\android\app\build\outputs\apk\release\
> ./zipalign -v 4 "C:\xampp2\htdocs\other_things\EDT-UAPV\edt\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk" "C:\xampp2\htdocs\other_things\EDT-UAPV\edt\platforms\android\app\build\outputs\apk\release\UAPV-EDT.apk"