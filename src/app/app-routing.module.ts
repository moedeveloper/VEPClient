import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartsidaComponent } from './startsida/startsida.component';


const routes: Routes = [
  {
    path: 'startsida',
    component: StartsidaComponent
  },
  {
    path: '**',
    redirectTo: 'startsida'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
