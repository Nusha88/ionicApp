import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';
import {SharedService} from '../services/shared.service';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {Platform} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-first',
    templateUrl: './count.component.html',
    styleUrls: ['./count.component.scss'],
    animations: [
        trigger('fadeIn', [
            state('normal', style({
                opacity: '1'
            })),
            state('fadeIn', style({
                opacity: '1'
            })),
            transition('normal => fadeIn', animate(500)),
            transition('fadeIn => normal', animate(500))
        ])
    ]
})
export class CountComponent implements OnInit {
    arr: any = [];
    number = 0;
    picArray = [
        {
            src: '../../assets/images/count/bunny.png',
        },
        {
            src: '../../assets/images/count/chick.png',
        },
        {
            src: '../../assets/images/count/cow.png',
        },
        {
            src: '../../assets/images/count/dog.png',
        },
        {
            src: '../../assets/images/count/everest.png',
        },
        {
            src: '../../assets/images/count/fox.png',
        },
        {
            src: '../../assets/images/count/hen.png',
        },
        {
            src: '../../assets/images/count/owl.png',
        },
        {
            src: '../../assets/images/count/peppa.png',
        },
        {
            src: '../../assets/images/count/pig.png',
        },
        {
            src: '../../assets/images/count/pluto.png',
        },
        {
            src: '../../assets/images/count/sheep.png',
        },
        {
            src: '../../assets/images/count/krepysh.png',
        },
        {
            src: '../../assets/images/count/marshal.png',
        },
        {
            src: '../../assets/images/count/mickey.png',
        },
        {
            src: '../../assets/images/count/mickey-2.png',
        },
        {
            src: '../../assets/images/count/minnie.png',
        },
        {
            src: '../../assets/images/count/monkey.png',
        },
        {
            src: '../../assets/images/count/mouse.png',
        },
        {
            src: '../../assets/images/count/peackock.png',
        },
        {
            src: '../../assets/images/count/pumba.png',
        },
        {
            src: '../../assets/images/count/rokky.png',
        },
        {
            src: '../../assets/images/count/sky.png',
        },
        {
            src: '../../assets/images/count/sponge.png',
        },
        {
            src: '../../assets/images/count/zebra.png',
        }
    ];
    wrongAnswer = false;
    rightAnswer = false;
    soundsRu = [
        {
            sound: '../../assets/sounds/num-rus/num00001.mp3'
        },
        {
            sound: '../../assets/sounds/num-rus/num00002.mp3'
        },
        {
            sound: '../../assets/sounds/num-rus/num00003.mp3'
        },
        {
            sound: '../../assets/sounds/num-rus/num00004.mp3'
        },
        {
            sound: '../../assets/sounds/num-rus/num00005.mp3'
        },
    ];
    soundsFr = [
        {
            sound: '../../assets/sounds/num-fr/1.mp3'
        },
        {
            sound: '../../assets/sounds/num-fr/2.mp3'
        },
        {
            sound: '../../assets/sounds/num-fr/3.mp3'
        },
        {
            sound: '../../assets/sounds/num-fr/4.mp3'
        },
        {
            sound: '../../assets/sounds/num-fr/5.mp3'
        },
    ];
    soundsEn = [
        {
            sound: '../../assets/sounds/num-eng/one.mp3'
        },
        {
            sound: '../../assets/sounds/num-eng/two.mp3'
        },
        {
            sound: '../../assets/sounds/num-eng/three.mp3'
        },
        {
            sound: '../../assets/sounds/num-eng/four.mp3'
        },
        {
            sound: '../../assets/sounds/num-eng/five.mp3'
        },
    ];
    sounds = [];
    index = 0;
    sound: string;
    state = 'normal';

    constructor(private router: Router, public shared: SharedService,
                private platform: Platform,
                private splashScreen: SplashScreen,
                private statusBar: StatusBar) {
        this.initializeApp();
        this.router.events.subscribe((event: any) => {
            if (event.url) {
                const url = event.url;
                if (url.includes('count?')) {
                    const lang = localStorage.getItem('language');
                    if (lang === 'ru') {
                        this.sounds = this.soundsRu;
                    } else if (lang === 'en') {
                        this.sounds = this.soundsEn;
                    } else {
                        this.sounds = this.soundsFr;
                    }
                    this.chooseNumber();
                    // this.onAnimate();
                    this.getPics();
                    this.router.navigate([], {
                        queryParams: {
                            yourParamName: null,
                            youCanRemoveMultiple: null,
                        },
                        queryParamsHandling: 'merge'
                    });
                }
            }
        });
    }

    onAnimate() {
        this.state === 'normal' ? this.state = 'fadeIn' : this.state = 'normal';
    }

    ngOnInit() {
        const lang = localStorage.getItem('language');
        if (lang === 'fr') {
            this.sounds = this.soundsFr;
        } else if (lang === 'en') {
            this.sounds = this.soundsEn;
        } else {
            this.sounds = this.soundsRu;
        }
        this.shared.shuffle(this.picArray);
        this.chooseNumber();
        this.getPics();
    }

    getPics() {
        const pic = this.picArray[this.index];
        // this.onAnimate();

        this.arr = pic;
    }

    chooseNumber() {
        this.number = Math.floor((Math.random() * 5) + 1);
    }

    playSound(n) {
        this.sound = this.sounds[n - 1].sound;
        let audio = new Audio();
        audio.src = this.sound;
        audio.load();
        audio.play();
    }

    check(n) {
        this.playSound(n);
        if (n === this.number) {
            this.state = 'normal';
            this.wrongAnswer = false;
            this.rightAnswer = true;
            setTimeout(() => {
                if (this.index < this.picArray.length - 1) {
                    this.index++;
                } else {
                    this.index = 0;
                }
                this.getPics();
                this.chooseNumber();
                this.rightAnswer = false;
            }, 800);
        } else {
            this.wrongAnswer = true;
            this.rightAnswer = false;
        }
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
