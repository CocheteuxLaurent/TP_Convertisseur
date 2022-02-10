import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reset-bouton',
  templateUrl: './reset-bouton.component.html',
  styleUrls: ['./reset-bouton.component.css']
})
export class ResetBoutonComponent implements OnInit {

  // Efface mémoire
  @Output() effacerSaisie = new EventEmitter<boolean>(); //tout effacer
  EffacerSaisieE() {
    let choix: any = confirm("Etes-vous sur ?")
    this.effacerSaisie.emit(choix);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
