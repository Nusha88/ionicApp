import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeAWordFromLettersRoutingModule } from './make-a-word-from-letters-routing.module';
import {MakeAWordFromLettersComponent} from './make-a-word-from-letters.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {SharedService} from '../services/shared.service';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [MakeAWordFromLettersComponent],
  imports: [
    CommonModule,
    MakeAWordFromLettersRoutingModule,
    DragDropModule,
    TranslateModule,
      IonicModule,
      RouterModule.forChild([
          {
              path: '',
              component: MakeAWordFromLettersComponent
          }
      ])
  ],
  providers: [SharedService]
})
export class MakeAWordFromLettersModule { }
