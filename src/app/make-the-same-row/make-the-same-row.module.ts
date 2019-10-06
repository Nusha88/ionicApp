import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeTheSameRowRoutingModule } from './make-the-same-row-routing.module';
import {MakeTheSameRowComponent} from './make-the-same-row.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {SharedService} from '../services/shared.service';
import {TranslateModule} from '@ngx-translate/core';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [MakeTheSameRowComponent],
  imports: [
    CommonModule,
    MakeTheSameRowRoutingModule,
    DragDropModule,
    TranslateModule,
      IonicModule,
      RouterModule.forChild([
          {
              path: '',
              component: MakeTheSameRowComponent
          }
      ])
  ],
  providers: [SharedService]
})
export class MakeTheSameRowModule { }
