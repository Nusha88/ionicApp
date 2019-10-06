import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MakeTheSameRowComponent} from './make-the-same-row.component';

const routes: Routes = [
  {
    path: '', component: MakeTheSameRowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeTheSameRowRoutingModule { }
