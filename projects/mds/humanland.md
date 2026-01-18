# Humanland - Ein an Popyplaytime angelehntes Spiel

![alt text](imgs/image5.png)

#### Inspiration und Zielsetzung
Wenn ich sehe welche erfloge Spiele wie Five night at Freddy's oder Popyplaytime haben, und das eine oder andere LetsPlay dazu auf Youtube sehe, dann jucken auch mit die Finger selbst so ein Spiel zu entwickeln und einen vieleicht ägnlichen Erfolg zu haben, das gebe ich ganz Schamlos zu. Also habe ich mich daran gemacht ein eigenes Spiel in diese Richtung zu entwickeln, mit dem Ziel meine Programmierfähigkeiten zu verbessern und ein unterhaltsames Spielerlebnis zu schaffen.

Hierbei sollte ich vielleicht erwähnen das Indi Game-Entwiclung für mich jetzt kein neuland sind und ich bereits damals das eine oder andere Spiel im Android Playstore veröffentlicht habe. Allerdings waren das immer eher kleine Spiele meistens Node programierung auf basis der GameDevelopemt Engine. Mit Humanland wollte ich jetzt mal ein etwas größeres Projekt umsetzten in einem 3D Setting diesesmal aber mit der Gamengine Godot, weil diese Open-Source und ich inzwischen nicht mehr so viel vertrauen in Unity habe nach den ganzen Lizenzänderungen auch wenn diese zurückgerudert sind vom Plan den Entwicklern mehr Geld aus der Tasche zu ziehen.

#### Stortelling und Gameplay
![alt text](imgs/image6.png)
Für ein Spiel das einem Poppyplaytime würdig ist musste es natürlich auch eine spannende Story geben. In Humanland sollte der Spieler in die Rolle eines Zehnjährigen Kindes schlüpfen das sich zusammen mit seinem Bruder und seinem Vater der sich im Wald verfährt auf dem Weg zu PizzaUniverse und auf dem Parkplatz ein mysteriöses verlassenes Freizeitpark namens Humanland wiederfindet der zwar keine Menschenseele beherbergt, dafür aber eine vielzahl von Parkmaskotchen. Schnell stellt sich jedoch heraus das die freundlichen Masktchen stark bemüht sind die Parkbesucher möglichst lange im Park zu behalten und bis zum Sonenenuntergang zu verhindern das diese den Park verlassen. Nach Sonnenuntergang stellt man schnell fest das die Maskotchen sich in bösartige Kreaturen verwandeln die Jagd auf die Besucher machen. Der Spieler muss also versuchen mit Hilfe seines Bruders und seines Vaters den Park zu erkunden, Rätsel zu lösen um zu überleben.


#### Was brauchte ich alles?

![alt text](imgs/image7.png)

Um dieses Spiel zu entwickeln brauchte ich natürlich eine Vielzahl von Ressourcen und Tools. Zunächst einmal benötigte ich die Godot Engine als Entwicklungsumgebung, da diese eine gute Balance zwischen Benutzerfreundlichkeit und Leistungsfähigkeit bietet. Für die 3D-Modellierung und Animationen verwendete ich Blender, ein Open-Source-Tool das sich hervorragend für die Erstellung von 3D-Inhalten eignet. Texturen und Grafiken erstellte ich mit GIMP und Krita und den KI Tools MidJouney und Chat-GPT, zwei leistungsstarke Open-Source-Bildbearbeitungsprogramme. Für die Soundeffekte und Musik nutzte ich das KI-Tool Suno sowie Audacity zur Bearbeitung und verschiedene Online-Ressourcen für lizenzfreie Sounds.
Als Programmiersprache verwendete ich GDScript, die native Skriptsprache von Godot, die speziell für die Spieleentwicklung optimiert ist.

#### 3D-Modellierung und Animation

![alt text](imgs/image8.png)
Natürlich hatte ich nicht die Ressourcen um Motion Capturing zu betreiben und jeden Dialog zu animaieren wäre einfach zu aufwendig gewesen. Also habe ich eine Code-Lösung entwickelt, die es mir zummindest ermöglicht Gesichtanimationen für das Sprechen zu erstellen indem ich verschiedene Mundbewgungen in blender erstellt habe und die dann über das auslesen des internen Audiopeaks der Sounddatei in Godot gesteuert habe. So konnte ich relativ einfach Dialoge animieren ohne jeden Frame von Hand animieren zu müssen.

#### Scripting und automatische Sequenzen
Ich hatte jetzt das Script, hatte bereits Bäume die Hauptcharacktere sowie ein Fahrzeugmodell erstellt und eine schöne Fahrzeug sequenz gebaut am ehsten vergleichbar mit dem Schienenfahrzeug aus Half-Life 1 wo der Spieler minimal gesteurt werden kann aber das Fahzeug eine feste Route abfährt. Das kombinierte ich mit den Animationen gescriptete Audiosequenzen (Alle von mir eigesprochen 😅) um eine cinematische Einführung zu erstellen. Und das ist mir auch gelungen.

<video controls src="video.mp4"  width="640" height="360" title="Title"></video>

#### Warum das Projekt scheiterte

Um ehrlich zu sein... es war einfach viel zu groß für mich alleine und ich hatte mich total übernommen. Ich hatte mir viel zu viel vorgenommen und musste irgendwann einsehen das ich das nicht alleine stemmen kann. Nach 2 Monaten hatte ich gerade mal eine Into-Sequenz und ein paar Modelle fertiggestellt. Also habe ich das Projekt schweren Herzens auf Eis gelegt. Vielleicht werde ich es irgendwann in der Zukunft wieder aufnehmen, aber im Moment konzentriere ich mich auf kleinere Projekte die ich auch alleine bewältigen kann.

#### Fazit
Trotz des Scheiterns von Humanland habe ich viel gelernt und wertvolle Erfahrungen in der Spieleentwicklung gesammelt. Ich habe meine Fähigkeiten in der 3D-Modellierung, Animation und Programmierung verbessert und ein besseres Verständnis für die Herausforderungen und Anforderungen bei der Entwicklung eines Spiels gewonnen. Vielleicht werde ich in Zukunft wieder an diesem Projekt arbeiten oder ein neues Spiel starten, aber im Moment bin ich froh über die Erfahrungen die ich gemacht habe.

