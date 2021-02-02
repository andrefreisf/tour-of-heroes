import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroCreateComponent } from './hero-create/hero-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/create', component: HeroCreateComponent },
  { path: 'heroes/:id', component: HeroDetailComponent },
  { path: 'heroes/:id/edit', component: HeroEditComponent },
  { path: 'crises', component: CrisisListComponent },
  { path: 'crises/:id', component: CrisisDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}