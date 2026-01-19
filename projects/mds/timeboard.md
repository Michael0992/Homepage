# TimeBoard
## Eine Software zum Planen von Schichten, Meetings, Aufgaben und Terminen
![alt text](imgs/image10.png)
TimeBoard ist eine Software, die ich aktuell entwickle, um Unternehmen und Teams zu helfen, ihre Schichten, Meetings, Aufgaben und Termine besser zu planen und zu verwalten.
#### Motivation und Zielsetzung
Die Idee zu TimeBoard entstand, als ich nach Ideen suchte für Softwareprojekte, die für meine Firma, aber auch für andere nützlich sein könnten. Viele Unternehmen nutzen für Einsatzpläne, Schichtpläne und Terminplanung entweder veraltete Software oder sogar manuelle Methoden wie Excel-Tabellen oder Papierkalender. Diese Methoden sind oft ineffizient, fehleranfällig und schwer zu verwalten, besonders wenn es um größere Teams geht.
#### Das Ziel
![alt text](imgs/image14.png)
Eine Software, die es ermöglicht, Mitarbeiter, Schüler und Teilnehmer zu speichern, in Gruppen zu organisieren, diese Gruppen mit Mischgruppen zu erweitern und diese mit Terminen sowie Dozenten, Trainern oder Gruppenleitern zu verbinden.
#### Geplante Grundfunktionen und Features:
![alt text](imgs/image11.png)
- Node.js-Webserver mit teils clientseitiger, teils serverseitiger Architektur.
- Ein Datenbanksystem zur Speicherung von Benutzern, Gruppen, Terminen und anderen relevanten Daten.
- Ein Account-System, das es ermöglicht, Mitglieder einzuladen, ein Konto zu erstellen oder eine Organisation zu registrieren.
- Ein Mail-System zur Passwortzurücksetzung, Benachrichtigungen und Einladungen.
- Ein Kalendersystem, das es ermöglicht, Überblick über die eigenen Termine zu behalten.
- Ein Dashboard für Operatoren und Administratoren zur Verwaltung von Benutzern, Referenten, Gruppen, Mischgruppen und Terminen.
#### Aufbau einer Testumgebung
Mir ist es wichtig, TimeBoard in einer Umgebung zu testen, die wie eine echte Produktionsumgebung funktioniert; dafür habe ich mir ein System überlegt.
![alt text](imgs/image12.png)
2. Ich habe einen einfachen Raspberry Pi 5 als Node.js-Server eingerichtet, der als Webserver für TimeBoard dient und MariaDB als lokale Datenbank nutzt.
3. Ich habe ein Tunnel-Protokoll (Cloudflare Tunnel) eingerichtet, um den Raspberry Pi sicher mit dem Internet zu verbinden. Danach war TimeBoard über die Domain https://timeboard.emshift.org erreichbar. Danach war der Raspberry Pi als mobiler Webserver einsetzbar, den ich beliebig vom Strom und Internet trennen kann, wenn ich gerade nicht daran arbeite.
4. Die eigentliche Entwicklung von TimeBoard findet lokal auf meinem Entwicklungsrechner statt. Ich nutze Visual Studio Code als IDE und GitHub für die Versionskontrolle.
#### Aufbau der Softwarearchitektur
Mir ist es bewusst, dass es eine Vielzahl an Frameworks und Bibliotheken gibt, die ich hätte nutzen können, um TimeBoard zu entwickeln. Ich habe aber bewusst auf React oder Angular verzichtet und eigene Komponenten entwickelt, um die Software schlank und performant zu halten.
##### Statisch und Dynamisch
In meiner Software sind die Seiten Login, Kalender und Dashboard als einzelne HTML-Seiten mit eingebettetem JavaScript und CSS aufgebaut. Die Seiten kommunizieren mit dem Server über REST-APIs, um Daten zu laden und zu speichern. Die Dashboard-Seite lädt dynamisch verschiedene Module basierend auf der Benutzerrolle (Operator, Administrator) und den verfügbaren Funktionen, genau wie die Kalender-Seite, die den Kalender dynamisch rendert, basierend auf den gespeicherten Terminen.
##### Struktur
![alt text](imgs/image9.png)
Mir war und ist es wichtig, eine klare Struktur in meinem Dateibaum zu haben, daher habe ich die Dateien wie folgt organisiert:
- **/index.js**: Der Haupteinstiegspunkt der Anwendung, der den Express-Server initialisiert und die Middleware sowie die Routen konfiguriert.
- **/public**: Enthält statische Dateien wie HTML, CSS, JavaScript und Bilder.
  - **/modals**: Enthält die HTML-Modal-Komponenten für verschiedene Dialoge und Pop-ups.
  - **/styles**: Enthält die CSS-Dateien für das Styling der Anwendung.
  - **/js**: Enthält die JavaScript-Dateien für die Client-seitige Logik.
  - **/secure**: Enthält API-/me-Endpunkte, die Authentifizierung erfordern.
#### Sicherheit und Datenschutz
Mir ist es sehr wichtig, dass TimeBoard keine Angriffsfläche für Angreifer bietet und dass die Daten der Benutzer sicher gespeichert werden. Daher habe ich folgende Maßnahmen ergriffen:
- **Passwortsicherheit**: Ich nutze bcrypt, um Passwörter zu hashen, bevor sie in der Datenbank gespeichert werden. Dadurch sind die Passwörter auch bei einem Datenbankleck geschützt.
- **HTTPS**: Ich habe ein SSL-Zertifikat über Cloudflare eingerichtet, um sicherzustellen, dass alle Datenübertragungen zwischen dem Client und dem Server verschlüsselt sind.
- **Eingabevalidierung**: Ich validiere alle Benutzereingaben sowohl auf der Client- als auch auf der Server-Seite, um SQL-Injektionen und XSS-Angriffe zu verhindern.
- **Zugriffskontrolle**: Ich habe ein rollenbasiertes Zugriffskontrollsystem implementiert, um sicherzustellen, dass nur autorisierte Benutzer auf bestimmte Funktionen und Daten zugreifen können.
- **Sessionsmanagement**: Ich nutze sichere Cookies und implementiere Session-Timeouts, um unbefugten Zugriff zu verhindern.
- **Ratelimiting**: Ich habe Ratelimiting auf kritischen Endpunkten implementiert, um Brute-Force-Angriffe zu verhindern.
- **gehashte Tokens**: Ich nutze gehashte Tokens für die Authentifizierung und Autorisierung, um sicherzustellen, dass sensible Informationen nicht im Klartext übertragen oder gespeichert werden.
- **KI-gestützte Cross-Site-Scripting-Analyse**: Ich nutze in regelmäßigen Abständen KI-Tools, um den Code auf mögliche XSS-Schwachstellen zu analysieren und zu identifizieren.
#### Todos und Weiterentwicklung
TimeBoard ist aktuell noch nicht produktionsreif und befindet sich in der aktiven Entwicklung. Da ich die Software privat entwickle und keine externen Investoren habe, arbeite ich in meiner Freizeit daran und setze mir selbst Meilensteine und Ziele.
So entwickelt sich die Software Funktion für Funktion weiter bis zu einem MVP.
Hier sind einige der nächsten Schritte und Funktionen, die ich plane zu implementieren:
- **UI-Anpassung für mobile Geräte**: Es gibt immer noch einige Bugs und gerade ein umfangreicher Kalender ist auf kleinen Bildschirmen schwer zu bedienen.
- **Grundfunktionalität für das Löschen von Accounts und Organisationen**: Aktuell gibt es keine Möglichkeit für Benutzer oder Administratoren, ihre Accounts oder Organisationen zu löschen. Dies ist eine wichtige Funktion, um den Datenschutzanforderungen gerecht zu werden.
- **Backup und Wiederherstellung**: Implementierung eines Systems zur regelmäßigen Sicherung der Datenbank und zur Wiederherstellung im Falle eines Datenverlusts.
- **Admin-Board für den Betreiber**: Ein spezielles Dashboard für den Betreiber der TimeBoard-Instanz (also aktuell mich) zur Überwachung und Verwaltung der gesamten Anwendung. Dies soll ermöglichen, Überblick über die Datenbank zu bekommen und Statistiken einzusehen, sowie eingeschränkte SQL-Transaktionen und Abfragen durchzuführen, ohne jedes Mal über SSH eine Verbindung zum Server herstellen zu müssen. Nebenbei wäre das auch für die Wartung von Vorteil.
#### Projektstatus
TimeBoard befindet sich aktuell in der aktiven Entwicklung. Die meisten Grundfunktionen sind bereits implementiert und funktionsfähig. Das Projekt ist aktuell ein privates Repository auf GitHub, aber ich gebe den Code gerne auf Anfrage frei.
# TimeBoard -
## Eine Software zum Plannen von Schichten, Meetings, Aufgaben und Terminen.

![alt text](imgs/image10.png)

TimeBoard ist eine Software die ich aktuell entwickle um Unternehmen und Teams zu helfen ihre Schichten, Meetings, Aufgaben und Termine besser zu planen und zu verwalten.

#### Motivation und Zielsetzung
Die Idee zu Timeboard entsand als ich nach Iddeen suchte für Sotftwareprojekte, die für meine Firma aber auch ander nützlich sein könnte. Viele Unternehmen nutzen für Einstpläne, Schichtpläne und Terminplanung entweder veraltete Software oder sogar manuelle Methoden wie Excel-Tabellen oder Papierkalender. Diese Methoden sind oft ineffizient, fehleranfällig und schwer zu verwalten, besonders wenn es um größere Teams geht.

#### Das Ziel

Eine Software die es ermöglicht Mitarbeiter, Schüler, Teilnehmer zu Speichern in Gruppen zu organisieren und diese Gruppen mit Mischgruppenzu erweitern und diese mit Terminen und Dozenten, Trainern oder Gruppenleitern zu verbinden.

#### Geplannte Grundfunktionen und Features:
![alt text](imgs/image11.png)
- Node.Js Webserver mit teils Client-seitig teils Server-seitig Architektur.
<br>
- Ein Datebanksystem zur Speicherung von Benutzern, Gruppen, Terminen und anderen relevanten Daten. 
<br>
- ein Account System das es ermöglich Mitglieder ein zuladen, ein Konto zu Erstellen oder eine Organisation zu registrieren.
<br>
- Ein Mail-System zur Passwortzurücksetzung, Benachrichtigungen und Einladungen.
<br>
- Ein Kalendersystem das es ermöglicht übersicht über die eigenen Termine zu behalten.
<br>
- Ein Dashboard für Operator und Administratoren zur Verwaltung von Benutzern, Refernten, Gruppen, Mischgruppen und Terminen.

#### Aufbau einer Testumgebung

Mir ist es wichtig Timeboard in einer umgebung zu testen die wie eine echte Produktionsumgebung funktioniert, dafür habe ich mir ein System überlegt.
![alt text](imgs/image12.png)

1. Ich habe unter Cloudflare eine Domain registriert: timeboard.emshift.org
<br>
2. Ich habe einen einfachen Raspberry Pi 5 als Node.js Server eingerichtet, der als Webserver für Timeboard dient und MariaDB als lokale Datenbank nutzt.
<br>
3. Ich habe ein Tunnel-Protokoll (Cloudflare Tunnel) eingerichtet, um den Raspberry Pi sicher mit dem Internet zu verbinden. Danach war Timeboard über die Domain https://timeboard.emshift.org erreichbar. Danach war der Raspverry Pi als Mobiler Webserver einsätzbar den ich beliebig vom Strom un Internet trennen kann wenn ich gerade nicht daran arbeite.
<br>
4. Die Eigentliche Entwicklung von Timeboard findet lokal auf meinem Entwicklungsrechner statt. Ich nutze Visual Studio Code als IDE und GitHub für die Versionskontrolle.
<br>
5. Sobald ich Änderungen am Code vornehme, teste ich diese lokal und pushe sie dann zu einem GitHub-Repository. Auf meinem Pi kann ich dann über SSH auf das Repository zugreifen und die neuesten Änderungen per git pull herunterladen.

#### Aufbau der Softwarearchitektur
Mir ist bewust das es eine Vielzahl an Frameworks und Bibliotheken gibt die ich hätte nutzen können um Timeboard zu entwickeln, ich habe aber bewust auf react oder angular verzichtet und habe eigene Komponenten entwickelt um die Software schlank und performant zu halten.
![alt text](imgs/image13.png)

##### Statisch und Dynamisch
In meiner Software sind die Seiten Login, Kalender und Dashboard als einzelne HTML-Seiten mit eingebettetem JavaScript und CSS aufgebaut. Die Seiten kommunizieren mit dem Server über REST-APIs um Daten zu laden und zu speichern. Die Dashboard-Seite lädt dynamisch verschiedene Module basierend auf der Benutzerrolle (Operator, Administrator) und den verfügbaren Funktionen genau wie die Kalender-Seite die den Kalender dynamisch rendert basierend auf den gespeicherten Terminen.

##### Struktur

![alt text](imgs/image9.png)
Mir war und ist es wichtig eine klare Struktur in meinem Dateienbaum zu haben, daher habe ich die Dateien wie folgt organisiert:

- **/index.js**: Der Haupteinstiegspunkt der Anwendung, der den Express-Server initialisiert und die Middleware sowie die Routen konfiguriert.

- **/public**: Enthält statische Dateien wie HTML, CSS, JavaScript und Bilder.
  - **/modals**: Enthält die HTML-Modal-Komponenten für verschiedene Dialoge und Pop-ups.
  - **/styles**: Enthält die CSS-Dateien für das Styling der Anwendung.
  - **/js**: Enthält die JavaScript-Dateien für die Client-seitige Logik.
  - **/secure**: Enthält api/me endpoints die Authentifizierung erfordern.

- **/private**: Enthält server-seitige Dateien wie Routen, Controller, Modelle und Konfigurationsdateien.

#### Sicherheit und Datenschutz
Mir ist es sehr wichtig das Timeboard keine Agriffsfläche bietet für Angreifer und das die Daten der Benutzer sicher gespeichert werden. Daher habe ich folgende Maßnahmen ergriffen:

- **Passwortsicherheit**: Ich nutze bcrypt um Passwörter zu hashen bevor sie in der Datenbank gespeichert werden. Dadurch sind die Passwörter auch bei einem Datenbankleck geschützt.

- **HTTPS**: Ich habe ein SSL-Zertifikat über Cloudflare eingerichtet um sicherzustellen das alle Datenübertragungen zwischen dem Client und dem Server verschlüsselt sind.

- **Eingabevalidierung**: Ich validiere alle Benutzereingaben sowohl auf der Client- als auch auf der Server-Seite um SQL-Injektionen und XSS-Angriffe zu verhindern.

- **Zugriffskontrolle**: Ich habe ein Rollen-basiertes Zugriffskontrollsystem implementiert um sicherzustellen das nur autorisierte Benutzer auf bestimmte Funktionen und Daten zugreifen können.

- **Sessionsmanagement**: Ich nutze sichere Cookies und implementiere Session-Timeouts um unbefugten Zugriff zu verhindern.

- **Ratelimiting**: Ich habe Ratelimiting auf kritischen Endpunkten implementiert um Brute-Force-Angriffe zu verhindern.

- **gehashte Tokens**: Ich nutze gehashte Tokens für die Authentifizierung und Autorisierung, um sicherzustellen, dass sensible Informationen nicht im Klartext übertragen oder gespeichert werden.

- **KI gestützte Cross Site Scripting Analyse**: Ich nutze in regelmäßigen Abständen KI-Tools um den Code auf mögliche XSS-Schwachstellen zu analysieren und zu identifizieren.

#### Todos und Weiterentwicklung
TimeBoard ist aktuell noch nicht Produktionsreif und befindet sich in der aktiven Entwicklung. Da ich die Software privat entwickle und keine externen Investoren habe, arbeite ich in meiner Freizeit daran und setze mir selbst Meilensteine und Ziele.

So entwickelt sich die Software Funktion für Funktion weiter bis zu einem MVP.

Hier sind einige der nächsten Schritte und Funktionen die ich plane zu implementieren:

- **UI Anpassung für Mobile Geräte**: Es gibt immer noch einige Bugs und gerade ein Umfangreicher Kalender ist auf kleinen Bildschirmen schwer zu bedienen. 
<br>
- **Grundfunktionalität für das löschen von Accounts und Organisationen**: Aktuell gibt es keine Möglichkeit für Benutzer oder Administratoren ihre Accounts oder Organisationen zu löschen. Dies ist eine wichtige Funktion um den Datenschutzanforderungen gerecht zu werden.
<br>
- **Backup und Wiederherstellung**: Implementierung eines Systems zur regelmäßigen Sicherung der Datenbank und zur Wiederherstellung im Falle eines Datenverlusts.
<br>
- **Admin-Board für den Betreiber**: Ein spezielles Dashboard für den Betreiber der Timeboard-Instanz (Also aktuell mich) zur Überwachung und Verwaltung der gesamten Anwendung. Dies soll ermöglichen überblick über die Datenbank zu bekommen und Statistiken einzusehen, sowie eingeschränkte SQL-Transaktionen und Abfragen durchzuführen ohne jedes mal über SSH eine Verbindung zum Server herstellen zu müssen. Nebenbei wäre das auch für die Wartung von Vorteil.

#### Projekt Status
TimeBoard befindet sich aktuell in der aktiven Entwicklung. Die meisten Grundfunktionen sind bereits implementiert und funktionsfähig. Das Projekt ist aktuell ein privates Repository auf GitHub aber gebe den Code gerne auf Anfrage frei.


