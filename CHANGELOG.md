# Change Log


## [2026.10.0] - 18 octobre 2026
**Nouveauté**
* Le README explique la confidentialité : télémétrie coupée par défaut et connexions réseau des extensions du pack.

**Modification**
* La télémétrie de VS Code (`telemetry.telemetryLevel`) est coupée par défaut à la configuration, y compris à la mise à jour.
* Retrait de l'extension de traduction des commentaires (`comment-translate`) : elle envoyait le texte des commentaires à un service tiers.

## [2026.8.0] - 25 août 2026
* Ajout de l'extension `electropol-fr.drawio-diagrams-editor` au pack.
* Passage de la version publique au format CalVer.

## Released
##### [0.2.1] - 4 août 2026
* Ajout de l'extension `electropol-fr.kablix` au pack.

##### [0.1.7] - 12 avril 2026
* Ajout de la détection automatique du chemin Python via `python -c "import sys; print(sys.executable)"`.
* Définition automatique de `python.defaultInterpreterPath` au démarrage et lors des mises à jour.
* Transformation en extension active avec entrée `src/extension.ts`.

##### [0.1.6] - 13 février 2026
* Suppression d'intellicode.