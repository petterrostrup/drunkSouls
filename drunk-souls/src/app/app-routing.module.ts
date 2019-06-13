import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CovenantsComponent} from './covenants/covenants.component';
import {BladesOfTheDarkmoonComponent} from './covenants/blades-of-the-darkmoon/blades-of-the-darkmoon.component';
import {BrotherhoodOfBloodComponent} from './covenants/brotherhood-of-blood/brotherhood-of-blood.component';
import {CompanyOfChampionsComponent} from './covenants/company-of-champions/company-of-champions.component';
import {PilgrimsOfDarkComponent} from './covenants/pilgrims-of-dark/pilgrims-of-dark.component';
import {WarriorOfSunlightComponent} from './covenants/warrior-of-sunlight/warrior-of-sunlight.component';
import {RulesComponent} from './rules/rules.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'covenants', component: CovenantsComponent },
  { path: 'covenants/blades-of-the-darkmoon', component: BladesOfTheDarkmoonComponent },
  { path: 'covenants/brotherhood-of-blood', component: BrotherhoodOfBloodComponent },
  { path: 'covenants/company-of-champions', component: CompanyOfChampionsComponent },
  { path: 'covenants/pilgrims-of-dark', component: PilgrimsOfDarkComponent },
  { path: 'covenants/warrior-of-sunlight', component: WarriorOfSunlightComponent },
  { path: 'rules', component: RulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
