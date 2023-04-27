import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Design1Component } from './pages/design1/design1.component';

const routes: Routes = [
  { component: Design1Component, path: "design1"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
