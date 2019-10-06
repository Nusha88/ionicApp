import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MakeAWordFromLettersComponent} from './make-a-word-from-letters.component';

const routes: Routes = [
  {
    path: '', component: MakeAWordFromLettersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeAWordFromLettersRoutingModule { }
