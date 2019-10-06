import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { HomePage } from './home.page';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SharedService} from '../services/shared.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
      })
  ],
    providers: [SharedService],
  declarations: [HomePage]
})
export class HomePageModule {}
