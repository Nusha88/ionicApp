import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SharedService} from '../services/shared.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {Platform} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-alphabet-letters',
  templateUrl: './alphabet-letters.component.html',
  styleUrls: ['./alphabet-letters.component.scss'],
  animations: [
    trigger('letterFadeIn', [
      state('normal', style({
        marginLeft: '-2rem',
        opacity: '0'
      })),
      state('fadeIn', style({
        marginLeft: '0',
        opacity: '1'
      })),
      transition('normal => fadeIn', animate(500)),
      transition('fadeIn => normal', animate(500))
    ]),
    trigger('lettersFadeIn', [
      state('normal', style({
        opacity: '0'
      })),
      state('fadeIn', style({
        opacity: '1'
      })),
      transition('normal => fadeIn', animate(500)),
      transition('fadeIn => normal', animate(500))
    ])
  ]
})
export class AlphabetLettersComponent implements OnInit {
  lettersArr = [];
  selectedIdx = 10;
  findLetter = '';
  alphabetArray = [];
  sound = '';
  sounds = [];
  state = 'normal';
  state2 = 'normal';
  rightAnswer: boolean;
  wrongAnswer: boolean;
  ru = [
    {
      letter: 'А',
      sound: '../../assets/sounds/letters-rus/sound201.mp3'
    },
    {
      letter: 'Б',
      sound: '../../assets/sounds/letters-rus/sound207.mp3'
    },
    {
      letter: 'В',
      sound: '../../assets/sounds/letters-rus/sound211.mp3'
    },
    {
      letter: 'Г',
      sound: '../../assets/sounds/letters-rus/sound223.mp3'
    },
    {
      letter: 'Д',
      sound: '../../assets/sounds/letters-rus/sound219.mp3'
    },
    {
      letter: 'Е',
      sound: '../../assets/sounds/letters-rus/Sound6.mp3'
    },
    {
      letter: 'Ё',
      sound: '../../assets/sounds/letters-rus/Sound7.mp3'
    },
    {
      letter: 'Ж',
      sound: '../../assets/sounds/letters-rus/sound227.mp3'
    },
    {
      letter: 'З',
      sound: '../../assets/sounds/letters-rus/sound215.mp3'
    },
    {
      letter: 'И',
      sound: '../../assets/sounds/letters-rus/sound205.mp3'
    },
    {
      letter: 'Й',
      sound: '../../assets/sounds/letters-rus/sound237.mp3'
    },
    {
      letter: 'К',
      sound: '../../assets/sounds/letters-rus/sound225.mp3'
    },
    {
      letter: 'Л',
      sound: '../../assets/sounds/letters-rus/sound233.mp3'
    },
    {
      letter: 'М',
      sound: '../../assets/sounds/letters-rus/sound229.mp3'
    },
    {
      letter: 'Н',
      sound: '../../assets/sounds/letters-rus/sound231.mp3'
    },
    {
      letter: 'О',
      sound: '../../assets/sounds/letters-rus/sound203.mp3'
    },
    {
      letter: 'П',
      sound: '../../assets/sounds/letters-rus/sound209.mp3'
    },
    {
      letter: 'Р',
      sound: '../../assets/sounds/letters-rus/sound235.mp3'
    },
    {
      letter: 'С',
      sound: '../../assets/sounds/letters-rus/sound217.mp3'
    },
    {
      letter: 'Т',
      sound: '../../assets/sounds/letters-rus/sound221.mp3'
    },
    {
      letter: 'У',
      sound: '../../assets/sounds/letters-rus/sound204.mp3'
    },
    {
      letter: 'Ф',
      sound: '../../assets/sounds/letters-rus/sound213.mp3'
    },
    {
      letter: 'Х',
      sound: '../../assets/sounds/letters-rus/sound241.mp3'
    },
    {
      letter: 'Ц',
      sound: '../../assets/sounds/letters-rus/sound240.mp3'
    },
    {
      letter: 'Ч',
      sound: '../../assets/sounds/letters-rus/sound239.mp3'
    },
    {
      letter: 'Ш',
      sound: '../../assets/sounds/letters-rus/sound228.mp3'
    },
    {
      letter: 'Щ',
      sound: '../../assets/sounds/letters-rus/sound238.mp3'
    },
    {
      letter: 'Ъ',
      sound: '../../assets/sounds/letters-rus/Sound28.mp3'
    },
    {
      letter: 'Ы',
      sound: '../../assets/sounds/letters-rus/sound206.mp3'
    },
    {
      letter: 'Ь',
      sound: '../../assets/sounds/letters-rus/Sound30.mp3'
    },
    {
      letter: 'Э',
      sound: '../../assets/sounds/letters-rus/sound202.mp3'
    },
    {
      letter: 'Ю',
      sound: '../../assets/sounds/letters-rus/Sound32.mp3'
    },
    {
      letter: 'Я',
      sound: '../../assets/sounds/letters-rus/Sound33.mp3'
    }

  ];
  en = [
    {
      letter: 'A',
      sound: '../../assets/sounds/letters-eng/a.mp3'
    },
    {
      letter: 'B',
      sound: '../../assets/sounds/letters-eng/b.mp3'
    },
    {
      letter: 'C',
      sound: '../../assets/sounds/letters-eng/c.mp3'
    },
    {
      letter: 'D',
      sound: '../../assets/sounds/letters-eng/d.mp3'
    },
    {
      letter: 'E',
      sound: '../../assets/sounds/letters-eng/e.mp3'
    },
    {
      letter: 'F',
      sound: '../../assets/sounds/letters-eng/f.mp3'
    },
    {
      letter: 'G',
      sound: '../../assets/sounds/letters-eng/g.mp3'
    },
    {
      letter: 'H',
      sound: '../../assets/sounds/letters-eng/h.mp3'
    },
    {
      letter: 'I',
      sound: '../../assets/sounds/letters-eng/i.mp3'
    },
    {
      letter: 'J',
      sound: '../../assets/sounds/letters-eng/j.mp3'
    },
    {
      letter: 'K',
      sound: '../../assets/sounds/letters-eng/k.mp3'
    },
    {
      letter: 'L',
      sound: '../../assets/sounds/letters-eng/l.mp3'
    },
    {
      letter: 'M',
      sound: '../../assets/sounds/letters-eng/m.mp3'
    },
    {
      letter: 'N',
      sound: '../../assets/sounds/letters-eng/n.mp3'
    },
    {
      letter: 'O',
      sound: '../../assets/sounds/letters-eng/o.mp3'
    },
    {
      letter: 'P',
      sound: '../../assets/sounds/letters-eng/p.mp3'
    },
    {
      letter: 'Q',
      sound: '../../assets/sounds/letters-eng/q.mp3'
    },
    {
      letter: 'R',
      sound: '../../assets/sounds/letters-eng/r.mp3'
    },
    {
      letter: 'S',
      sound: '../../assets/sounds/letters-eng/s.mp3'
    },
    {
      letter: 'T',
      sound: '../../assets/sounds/letters-eng/t.mp3'
    },
    {
      letter: 'U',
      sound: '../../assets/sounds/letters-eng/u.mp3'
    },
    {
      letter: 'V',
      sound: '../../assets/sounds/letters-eng/v.mp3'
    },
    {
      letter: 'W',
      sound: '../../assets/sounds/letters-eng/w.mp3'
    },
    {
      letter: 'X',
      sound: '../../assets/sounds/letters-eng/x.mp3'
    },
    {
      letter: 'Y',
      sound: '../../assets/sounds/letters-eng/y.mp3'
    },
    {
      letter: 'Z',
      sound: '../../assets/sounds/letters-eng/z.mp3'
    }

  ];
  fr = [
    {
      letter: 'A',
      sound: '../../assets/sounds/letters-fr/A (1).mp3'
    },
    {
      letter: 'B',
      sound: '../../assets/sounds/letters-fr/B (1).mp3'
    },
    {
      letter: 'C',
      sound: '../../assets/sounds/letters-fr/C (1).mp3'
    },
    {
      letter: 'D',
      sound: '../../assets/sounds/letters-fr/D (1).mp3'
    },
    {
      letter: 'E',
      sound: '../../assets/sounds/letters-fr/E (1).mp3'
    },
    {
      letter: 'F',
      sound: '../../assets/sounds/letters-fr/F (1).mp3'
    },
    {
      letter: 'G',
      sound: '../../assets/sounds/letters-fr/G (1).mp3'
    },
    {
      letter: 'H',
      sound: '../../assets/sounds/letters-fr/H (1).mp3'
    },
    {
      letter: 'I',
      sound: '../../assets/sounds/letters-fr/I (1).mp3'
    },
    {
      letter: 'J',
      sound: '../../assets/sounds/letters-fr/J (1).mp3'
    },
    {
      letter: 'K',
      sound: '../../assets/sounds/letters-fr/K (1).mp3'
    },
    {
      letter: 'L',
      sound: '../../assets/sounds/letters-fr/L (1).mp3'
    },
    {
      letter: 'M',
      sound: '../../assets/sounds/letters-fr/M (1).mp3'
    },
    {
      letter: 'N',
      sound: '../../assets/sounds/letters-fr/N (1).mp3'
    },
    {
      letter: 'O',
      sound: '../../assets/sounds/letters-fr/O (1).mp3'
    },
    {
      letter: 'P',
      sound: '../../assets/sounds/letters-fr/P (1).mp3'
    },
    {
      letter: 'Q',
      sound: '../../assets/sounds/letters-fr/Q (1).mp3'
    },
    {
      letter: 'R',
      sound: '../../assets/sounds/letters-fr/R (1).mp3'
    },
    {
      letter: 'S',
      sound: '../../assets/sounds/letters-fr/S (1).mp3'
    },
    {
      letter: 'T',
      sound: '../../assets/sounds/letters-fr/T (1).mp3'
    },
    {
      letter: 'U',
      sound: '../../assets/sounds/letters-fr/U (1).mp3'
    },
    {
      letter: 'V',
      sound: '../../assets/sounds/letters-fr/V (1).mp3'
    },
    {
      letter: 'W',
      sound: '../../assets/sounds/letters-fr/W (1).mp3'
    },
    {
      letter: 'X',
      sound: '../../assets/sounds/letters-fr/X (1).mp3'
    },
    {
      letter: 'Y',
      sound: '../../assets/sounds/letters-fr/Y (1).mp3'
    },
    {
      letter: 'Z',
      sound: '../../assets/sounds/letters-fr/Z (1).mp3'
    }
  ];
  letters = [];
  index = 0;
  @Output() rightAnswerSend = new EventEmitter<boolean>();
  @Output() wrongAnswerSend = new EventEmitter<boolean>();

  constructor(public shared: SharedService,
              public translate: TranslateService,
              private router: Router,
              private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar) {
      this.initializeApp();
      this.router.events.subscribe((event: any) => {
      if (event.url) {
        const url = event.url;
        this.alphabetArray = [];
        this.lettersArr = [];
        this.sounds = [];
        this.state = 'normal';
        this.state2 = 'normal';
        if (url.includes('find-letter?')) {
          this.rightAnswer = false;
          this.wrongAnswer = false;
          this.letters = [];
          this.findLetter = '';
          this.checkLanguage();
          this.router.navigate([], {
            queryParams: {
              yourParamName: null,
              youCanRemoveMultiple: null,
            },
            queryParamsHandling: 'merge'
          });
          this.onPlayGame(this.letters);
        }
      }
    });
  }

  ngOnInit() {
    this.checkLanguage();
    this.onPlayGame(this.letters);
    console.log(this.lettersArr);
  }

  checkLanguage() {
    const lang = localStorage.getItem('language');
    if (lang === 'fr') {
      this.letters = this.fr;
    } else if (lang === 'en') {
      this.letters = this.en;
    } else {
      this.letters = this.ru;
    }
    this.shared.shuffle(this.letters);
  }

  onPlayGame(lang: any) {
    this.shared.getLettersArray(lang, this.alphabetArray);
    this.generateMainLetter();
    this.generateLetter();
    this.sounds = lang;
    this.playAudio(this.sounds);
  }

  sendRightAnswer() {
    this.rightAnswerSend.emit(this.rightAnswer);
  }

  sendWrongAnswer() {
    this.wrongAnswerSend.emit(this.wrongAnswer);
  }

  onAnimate() {
    this.state === 'normal' ? this.state = 'fadeIn' : this.state = 'normal';
  }

  onAnimateLetters() {
    this.state2 === 'normal' ? this.state2 = 'fadeIn' : this.state2 = 'normal';
  }

  generateMainLetter() {
    for (let i = 0; i < 1; i++) {
      const alphabet = this.alphabetArray;
      this.findLetter = alphabet[this.index];
    }
    this.onAnimate();
  }

  playAudio(lang: any) {
    lang.forEach(letters => {
      if (letters.letter === this.findLetter) {
        this.sound = letters.sound;
        let audio = new Audio();
        audio.src = this.sound;
        audio.load();
        audio.play();
      }
    });
  }

  generateLetter() {
    for (let i = 0; i < 7; i++) {
      let emptyString = '';
      const alphabet = this.alphabetArray;
      while (emptyString.length < 1) {
        emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
        this.lettersArr.push(emptyString);
      }
    }
    const x = Math.floor((Math.random() * 6) + 1);
    this.lettersArr[x] = this.findLetter;
    this.onAnimateLetters();
  }

  refresh() {
    this.lettersArr = [];
    this.selectedIdx = 10;
    this.rightAnswer = false;
    this.wrongAnswer = false;
    this.sendRightAnswer();
    this.sendWrongAnswer();
    this.generateMainLetter();
    this.generateLetter();
  }

  selectItem(letter, index) {
    if (letter === this.findLetter) {
      this.rightAnswer = true;
      this.wrongAnswer = false;
      this.sendRightAnswer();
      this.sendWrongAnswer();
      this.state = 'normal';
      this.state2 = 'normal';
      if (this.index < this.letters.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
      this.lettersArr = [];
      setTimeout(() => {
        this.selectedIdx = 10;
        this.refresh();
        this.playAudio(this.sounds);
      }, 800);
    } else {
      this.rightAnswer = false;
      this.wrongAnswer = true;
      this.sendRightAnswer();
      this.sendWrongAnswer();
      this.selectedIdx = index;
      // this.playSound(letter);
    }
  }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
