import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EisentomatoComponent} from "./eisentomato/eisentomato.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: 'lists', component: EisentomatoComponent, children: [
      { path: ':id', component: EisentomatoComponent },
      { path: '', component: EisentomatoComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
