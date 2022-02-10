import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bouton-monnaie',
  templateUrl: './bouton-monnaie.component.html',
  styleUrls: ['./bouton-monnaie.component.css']
})
export class BoutonMonnaieComponent implements OnInit {

  @Input() monnaiesE: any;
  @Input() indexE: any;

  @Output() envoiMonnaie = new EventEmitter<string>();
  newMonnaieE(contenuChamp: string) {
    this.envoiMonnaie.emit(contenuChamp);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
