import { Component } from '@angular/core';

import { monnaiesTab } from 'src/mesdonnees/monnaiesDef';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'convertisseur_monnaie';

  monnaies = monnaiesTab; // tableau des monnaies
  //initialisations
  indiceTab = 0; // indice courant dans le tableau "this.monnaies"
  nbSaisie: number = 0; // le nombre courant affiché dans le champ de saisie
  monnaie: string = this.monnaies[this.indiceTab].symbole; // la monnaie affichée
  monnaieSelections: string = "";

  nombreSaisie(nbAffiche: string) {// récupère le nombre tapé dans le champ
    this.nbSaisie = parseFloat(nbAffiche);
  }

  saisieMonnaie(monnaieAffiche: string) {// recuperer la monaie dans la selection
    this.monnaieSelections = monnaieAffiche;
  }

  //conversion
  MonnaieConversion(index: string) {// reçoit l'index de la monnaie de conversion choisie
    if (this.indiceTab != parseInt(index)) {
      this.indiceTab = parseInt(index);
      this.monnaie = this.monnaies[this.indiceTab].symbole; // nouvelle monnaie courante
      //calcul
      let tauxDechange: any;
      tauxDechange = this.monnaies[parseInt(index)].taux.euros;
      this.nbSaisie = this.nbSaisie * tauxDechange; // nouveau nombre
    }
  }
  // Effacer
  effacerSaisie(effacer: boolean) {
    if (effacer) {
      this.nbSaisie = 0;
      this.indiceTab = 0;
      this.monnaie = this.monnaies[this.indiceTab].symbole; // monnaie par défaut
    }
  }
}
