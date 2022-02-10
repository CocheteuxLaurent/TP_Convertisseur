import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChampNbComponent } from './champ-nb/champ-nb.component';
import { ChampMonnaieComponent } from './champ-monnaie/champ-monnaie.component';
import { BoutonMonnaieComponent } from './bouton-monnaie/bouton-monnaie.component';
import { ResetBoutonComponent } from './reset-bouton/reset-bouton.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampNbComponent,
    ChampMonnaieComponent,
    BoutonMonnaieComponent,
    ResetBoutonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
