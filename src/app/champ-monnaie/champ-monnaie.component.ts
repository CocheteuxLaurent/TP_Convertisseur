import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-champ-monnaie',
  templateUrl: './champ-monnaie.component.html',
  styleUrls: ['./champ-monnaie.component.css']
})
export class ChampMonnaieComponent implements OnInit {

  @Input() monnaieE: any;
  @Output() MonnaieEnvoyer = new EventEmitter<string>();
  newMonnaieE(SelectionChamp: string) {

    this.MonnaieEnvoyer.emit(SelectionChamp);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
