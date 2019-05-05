import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SettingsComponent } from './Pages/settings/settings.component';

const routes: Routes = [
  {
    path : 'accueil',
    component : HomeComponent
  },
  {
    path : 'parametres',
    component : SettingsComponent
  },
  {
    path : '',
    redirectTo : 'accueil',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
