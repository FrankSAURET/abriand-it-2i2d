# Pack d'Extension IT-2I2D
Collection  d'extensions pour travailler en IT et 2I2D.
<p align="center">
 <a href="https://marketplace.visualstudio.com/items?itemName=electropol-fr.abriand-it-2i2d">
    <img src="https://img.shields.io/visual-studio-marketplace/v/electropol-fr.abriand-it-2i2d?label=Version&color=blue" alt="Version">
  </a>
  <img src="https://img.shields.io/visual-studio-marketplace/i/electropol-fr.abriand-it-2i2d?label=Installs&color=green" alt="Installs">
  <img src="https://img.shields.io/visual-studio-marketplace/d/electropol-fr.abriand-it-2i2d?label=Downloads&color=orange" alt="Downloads">
  <img src="https://img.shields.io/visual-studio-marketplace/r/electropol-fr.abriand-it-2i2d?label=Rating&color=yellow" alt="Rating">
</p>

![Logo](image/LogoAbriandIT2I2D.png)

## Description
* Fournis les outils nécessaires pour développer correctement en **Python**. 
* Fournis les outils pour programmer en **html** et **css**.
* Fournis les outils nécessaire pour programmer les cartes **pico pi**
* Fournis **Kablix** pour simuler les cartes arduino et pico pi.
* Fournis **drawio-diagrams-editor** pour créer et modifier des schémas Draw.io.
* Facilite le codage avec :
    * Indentation automatique, 
    * Extrait de code, 
    * Amélioration des commentaires (voir exemples ci-dessous),
    * Aperçu de l'exécution du python.
    * Aperçu du résultat html et css en directe.

## Confidentialité et données personnelles
Ce pack est destiné à des élèves, dont des mineurs.

À l'installation et à chaque mise à jour, l'extension écrit `telemetry.telemetryLevel` à `off` dans les paramètres **utilisateur** de VS Code (global, sans confirmation). Python, Pylance et Live Preview n'envoient alors plus de données d'usage ni d'erreurs à Microsoft. Pour la réactiver : Paramètres > « telemetry.telemetryLevel ».

Même télémétrie coupée, certaines extensions contactent des serveurs pour télécharger ou vérifier des versions (le serveur voit l'adresse IP) : GitHub (Raspberry Pi Pico, draw.io), PyPA (Raspberry Pi Pico), npm, GitHub et micropython.org (Kablix). Par défaut, draw.io fonctionne hors ligne ; en mode en ligne, le contenu des diagrammes transite par `embed.diagrams.net`.

L'extension de traduction des commentaires a été retirée du pack, car elle envoyait le texte des commentaires à un service tiers. L'établissement doit informer les élèves (et leurs représentants légaux) de ces traitements.
