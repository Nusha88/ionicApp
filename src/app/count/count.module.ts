import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountRoutingModule } from './count-routing.module';
import {CountComponent} from './count.component';
import {TranslateModule} from '@ngx-translate/core';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [CountComponent],
  imports: [
    CommonModule,
    CountRoutingModule,
    TranslateModule,
      IonicModule,
      RouterModule.forChild([
          {
              path: '',
              component: CountComponent
          }
      ]),
  ]
})
export class CountModule { }
