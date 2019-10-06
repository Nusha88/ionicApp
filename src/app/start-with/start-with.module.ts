import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StartWithRoutingModule} from './start-with-routing.module';
import {StartWithComponent} from './start-with.component';
import {SharedService} from '../services/shared.service';
import {TranslateModule} from '@ngx-translate/core';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [StartWithComponent],
    imports: [
        CommonModule,
        StartWithRoutingModule,
        TranslateModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: StartWithComponent
            }
        ])
    ],
    providers: [SharedService]
})
export class StartWithModule {
}
