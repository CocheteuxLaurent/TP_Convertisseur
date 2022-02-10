import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-champ-nb',
  templateUrl: './champ-nb.component.html',
  styleUrls: ['./champ-nb.component.css']
})
export class ChampNbComponent implements OnInit {
  @Input() nombreE: any;
  @Output() NombreEnvoyer = new EventEmitter<string>();
  newNombreE(contenuChamp: string) {

    this.NombreEnvoyer.emit(contenuChamp);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
