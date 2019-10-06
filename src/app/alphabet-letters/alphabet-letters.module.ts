import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {AlphabetLettersComponent} from './alphabet-letters.component';

@NgModule({
    declarations: [AlphabetLettersComponent],
    imports: [
        CommonModule,
        TranslateModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: AlphabetLettersComponent
            }
        ]),
    ]
})
export class AlphabetLettersModule { }
