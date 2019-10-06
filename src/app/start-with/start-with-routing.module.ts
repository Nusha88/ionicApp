import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartWithComponent} from './start-with.component';

const routes: Routes = [
  { path: '', component: StartWithComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartWithRoutingModule { }
