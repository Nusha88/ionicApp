import {Component, OnInit} from '@angular/core';
import {SharedService} from './services/shared.service';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        public shared: SharedService,
        private router: Router,
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public translate: TranslateService) {
        this.initializeApp();
        this.translate.addLangs(['en', 'fr', 'ru']);
        const browserLang = this.translate.getBrowserLang();
        const lang = localStorage.getItem('language');
        if (lang) {
            this.translate.setDefaultLang(lang);
            this.translate.use(lang.match(/ru|en|fr/) ? lang : 'ru');
        } else {
            this.translate.setDefaultLang('ru');
            this.translate.use(browserLang.match(/ru|en|fr/) ? browserLang : 'ru');
        }
    }

    changeLang(val) {
        console.log(val);
        this.shared.setItem('language', val);
        const url = this.router.url;
        this.router.navigate([url], {queryParams: {lang: val}});
    }

    ngOnInit() {
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
