import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RulesComponent } from './rules/rules.component';
import { RuleComponentComponent } from './rules/rule-component/rule-component.component';
import { CovenantsComponent } from './covenants/covenants.component';
import { WarriorOfSunlightComponent } from './covenants/warrior-of-sunlight/warrior-of-sunlight.component';
import { BrotherhoodOfBloodComponent } from './covenants/brotherhood-of-blood/brotherhood-of-blood.component';
import { BladesOfTheDarkmoonComponent } from './covenants/blades-of-the-darkmoon/blades-of-the-darkmoon.component';
import { PilgrimsOfDarkComponent } from './covenants/pilgrims-of-dark/pilgrims-of-dark.component';
import { CompanyOfChampionsComponent } from './covenants/company-of-champions/company-of-champions.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    RuleComponentComponent,
    CovenantsComponent,
    WarriorOfSunlightComponent,
    BrotherhoodOfBloodComponent,
    BladesOfTheDarkmoonComponent,
    PilgrimsOfDarkComponent,
    CompanyOfChampionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
