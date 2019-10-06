import {Component, OnInit} from '@angular/core';
import {SharedService} from '../services/shared.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('normal', style({
        opacity: '0'
      })),
      state('fadeIn', style({
        opacity: '1'
      })),
      transition('normal => fadeIn', animate(500)),
      transition('fadeIn => normal', animate(500))
    ]),
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
  ]
})
export class StartWithComponent implements OnInit {
  findLetter = '';
  rightPic: any;
  wrongAnswer = false;
  rightAnswer = false;
  alphabetRus = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П',
    'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];
  alphabetEng = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  picArr = [
    {
      src: '../../assets/images/alphabet/ru/aist.png',
      srcMin: '../../assets/images/phone/alphabet-ru/aist.png',
      letter: 'А',
      sound: '../../assets/sounds/letters-rus/sound201.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/buterfly-2.png',
      srcMin: '../../assets/images/phone/alphabet-ru/buterfly.png',
      letter: 'Б',
      sound: '../../assets/sounds/letters-rus/sound207.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/helicopter.png',
      srcMin: '../../assets/images/phone/alphabet-ru/helicopter.png',
      letter: 'В',
      sound: '../../assets/sounds/letters-rus/sound211.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/caterpillar.png',
      srcMin: '../../assets/images/phone/alphabet-ru/caterpillar.png',
      letter: 'Г',
      sound: '../../assets/sounds/letters-rus/sound223.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/dolphin.png',
      srcMin: '../../assets/images/phone/alphabet-ru/dolphin.png',
      letter: 'Д',
      sound: '../../assets/sounds/letters-rus/sound219.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/racoon.png',
      srcMin: '../../assets/images/phone/alphabet-ru/racoon.png',
      letter: 'Е',
      sound: '../../assets/sounds/letters-rus/Sound6.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/hendgehog.png',
      srcMin: '../../assets/images/phone/alphabet-ru/hendgehog.png',
      letter: 'Ё',
      sound: '../../assets/sounds/letters-rus/Sound7.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/giraffe.png',
      srcMin: '../../assets/images/phone/alphabet-ru/giraffe.png',
      letter: 'Ж',
      sound: '../../assets/sounds/letters-rus/sound227.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/snail2.png',
      srcMin: '../../assets/images/phone/alphabet-ru/snail2.png',
      letter: 'З',
      sound: '../../assets/sounds/letters-rus/sound215.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/turkey.png',
      srcMin: '../../assets/images/phone/alphabet-ru/turkey.png',
      letter: 'И',
      sound: '../../assets/sounds/letters-rus/sound205.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/yogurt.png',
      srcMin: '../../assets/images/phone/alphabet-ru/yogurt.png',
      letter: 'Й',
      sound: '../../assets/sounds/letters-rus/sound237.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/cow.png',
      srcMin: '../../assets/images/phone/alphabet-ru/cow.png',
      letter: 'К',
      sound: '../../assets/sounds/letters-rus/sound225.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/horse.png',
      srcMin: '../../assets/images/phone/alphabet-ru/horse.png',
      letter: 'Л',
      sound: '../../assets/sounds/letters-rus/sound233.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/fly.png',
      srcMin: '../../assets/images/phone/alphabet-ru/fly.png',
      letter: 'М',
      sound: '../../assets/sounds/letters-rus/sound229.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/rhino.png',
      srcMin: '../../assets/images/phone/alphabet-ru/rhino.png',
      letter: 'Н',
      sound: '../../assets/sounds/letters-rus/sound231.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/cloud.png',
      srcMin: '../../assets/images/phone/alphabet-ru/cloud.png',
      letter: 'О',
      sound: '../../assets/sounds/letters-rus/sound203.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/train.png',
      srcMin: '../../assets/images/phone/alphabet-ru/train.png',
      letter: 'П',
      sound: '../../assets/sounds/letters-rus/sound209.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/fish.png',
      srcMin: '../../assets/images/phone/alphabet-ru/fish.png',
      letter: 'Р',
      sound: '../../assets/sounds/letters-rus/sound235.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/dragonfly.png',
      srcMin: '../../assets/images/phone/alphabet-ru/dragonfly.png',
      letter: 'С',
      sound: '../../assets/sounds/letters-rus/sound217.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/tractor.png',
      srcMin: '../../assets/images/phone/alphabet-ru/tractor.png',
      letter: 'Т',
      sound: '../../assets/sounds/letters-rus/sound221.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/snail.png',
      srcMin: '../../assets/images/phone/alphabet-ru/snail.png',
      letter: 'У',
      sound: '../../assets/sounds/letters-rus/sound204.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/flamingo.png',
      srcMin: '../../assets/images/phone/alphabet-ru/flamingo.png',
      letter: 'Ф',
      sound: '../../assets/sounds/letters-rus/sound213.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/hamster.png',
      srcMin: '../../assets/images/phone/alphabet-ru/hamster.png',
      letter: 'Х',
      sound: '../../assets/sounds/letters-rus/sound241.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/chick.png',
      srcMin: '../../assets/images/phone/alphabet-ru/chick.png',
      letter: 'Ц',
      sound: '../../assets/sounds/letters-rus/sound240.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/turtle.png',
      srcMin: '../../assets/images/phone/alphabet-ru/turtle.png',
      letter: 'Ч',
      sound: '../../assets/sounds/letters-rus/sound239.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/balloon.png',
      srcMin: '../../assets/images/phone/alphabet-ru/balloon.png',
      letter: 'Ш',
      sound: '../../assets/sounds/letters-rus/sound228.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/pike.png',
      srcMin: '../../assets/images/phone/alphabet-ru/pike.png',
      letter: 'Щ',
      sound: '../../assets/sounds/letters-rus/sound238.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/excavator.png',
      srcMin: '../../assets/images/phone/alphabet-ru/excavator.png',
      letter: 'Э',
      sound: '../../assets/sounds/letters-rus/sound202.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/yula.png',
      srcMin: '../../assets/images/phone/alphabet-ru/yula.png',
      letter: 'Ю',
      sound: '../../assets/sounds/letters-rus/Sound32.mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/apple.png',
      srcMin: '../../assets/images/phone/alphabet-ru/apple.png',
      letter: 'Я',
      sound: '../../assets/sounds/letters-rus/Sound33.mp3'
    }
  ];
  picArrEng = [
    {
      src: '../../assets/images/alphabet/eng/apple.png',
      srcMin: '../../assets/images/phone/alphabet-eng/apple.png',
      letter: 'A',
      sound: '../../assets/sounds/letters-eng/a.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/banana.png',
      srcMin: '../../assets/images/phone/alphabet-eng/banana.png',
      letter: 'B',
      sound: '../../assets/sounds/letters-eng/b.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/cat.png',
      srcMin: '../../assets/images/phone/alphabet-eng/cat.png',
      letter: 'C',
      sound: '../../assets/sounds/letters-eng/c.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/dog.png',
      srcMin: '../../assets/images/phone/alphabet-eng/dog.png',
      letter: 'D',
      sound: '../../assets/sounds/letters-eng/d.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/elephant.png',
      srcMin: '../../assets/images/phone/alphabet-eng/elephant.png',
      letter: 'E',
      sound: '../../assets/sounds/letters-eng/e.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/frog.png',
      srcMin: '../../assets/images/phone/alphabet-eng/frog.png',
      letter: 'F',
      sound: '../../assets/sounds/letters-eng/f.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/goat.png',
      srcMin: '../../assets/images/phone/alphabet-eng/goat.png',
      letter: 'G',
      sound: '../../assets/sounds/letters-eng/g.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/house.png',
      srcMin: '../../assets/images/phone/alphabet-eng/house.png',
      letter: 'H',
      sound: '../../assets/sounds/letters-eng/h.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/ice-cream.png',
      srcMin: '../../assets/images/phone/alphabet-eng/ice-cream.png',
      letter: 'I',
      sound: '../../assets/sounds/letters-eng/i.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/jellyfish.png',
      srcMin: '../../assets/images/phone/alphabet-eng/jellyfish.png',
      letter: 'J',
      sound: '../../assets/sounds/letters-eng/j.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/kangaroo.png',
      srcMin: '../../assets/images/phone/alphabet-eng/kangaroo.png',
      letter: 'K',
      sound: '../../assets/sounds/letters-eng/k.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/lizard.png',
      srcMin: '../../assets/images/phone/alphabet-eng/lizard.png',
      letter: 'L',
      sound: '../../assets/sounds/letters-eng/l.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/mouse.png',
      srcMin: '../../assets/images/phone/alphabet-eng/mouse.png',
      letter: 'M',
      sound: '../../assets/sounds/letters-eng/m.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/nuts.png',
      srcMin: '../../assets/images/phone/alphabet-eng/nuts.png',
      letter: 'N',
      sound: '../../assets/sounds/letters-eng/n.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/ostrich.png',
      srcMin: '../../assets/images/phone/alphabet-eng/ostrich.png',
      letter: 'O',
      sound: '../../assets/sounds/letters-eng/o.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/parrot.png',
      srcMin: '../../assets/images/phone/alphabet-eng/parrot.png',
      letter: 'P',
      sound: '../../assets/sounds/letters-eng/p.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/queen.png',
      srcMin: '../../assets/images/phone/alphabet-eng/queen.png',
      letter: 'Q',
      sound: '../../assets/sounds/letters-eng/q.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/rocket.png',
      srcMin: '../../assets/images/phone/alphabet-eng/rocket.png',
      letter: 'R',
      sound: '../../assets/sounds/letters-eng/r.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/sun.png',
      srcMin: '../../assets/images/phone/alphabet-eng/sun.png',
      letter: 'S',
      sound: '../../assets/sounds/letters-eng/s.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/tiger.png',
      srcMin: '../../assets/images/phone/alphabet-eng/tiger.png',
      letter: 'T',
      sound: '../../assets/sounds/letters-eng/t.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/unicorn.png',
      srcMin: '../../assets/images/phone/alphabet-eng/unicorn.png',
      letter: 'U',
      sound: '../../assets/sounds/letters-eng/u.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/violin.png',
      srcMin: '../../assets/images/phone/alphabet-eng/violin.png',
      letter: 'V',
      sound: '../../assets/sounds/letters-eng/v.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/wolf.png',
      srcMin: '../../assets/images/phone/alphabet-eng/wolf.png',
      letter: 'W',
      sound: '../../assets/sounds/letters-eng/w.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/xylophone.png',
      srcMin: '../../assets/images/phone/alphabet-eng/xylophone.png',
      letter: 'X',
      sound: '../../assets/sounds/letters-eng/x.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/yak.png',
      srcMin: '../../assets/images/phone/alphabet-eng/yak.png',
      letter: 'Y',
      sound: '../../assets/sounds/letters-eng/y.mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/zebra.png',
      srcMin: '../../assets/images/phone/alphabet-eng/zebra.png',
      letter: 'Z',
      sound: '../../assets/sounds/letters-eng/z.mp3'
    }
  ];
  picArrFr = [
    {
      src: '../../assets/images/alphabet/fr/abeille.png',
      srcMin: '../../assets/images/phone/alphabet-fr/abeille.png',
      letter: 'A',
      sound: '../../assets/sounds/letters-fr/A (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/baleine.png',
      srcMin: '../../assets/images/phone/alphabet-fr/baleine.png',
      letter: 'B',
      sound: '../../assets/sounds/letters-fr/B (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/crocodile.png',
      srcMin: '../../assets/images/phone/alphabet-fr/crocodile.png',
      letter: 'C',
      sound: '../../assets/sounds/letters-fr/C (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/dauphin.png',
      srcMin: '../../assets/images/phone/alphabet-fr/dauphin.png',
      letter: 'D',
      sound: '../../assets/sounds/letters-fr/D (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/elephant.png',
      srcMin: '../../assets/images/phone/alphabet-eng/elephant.png',
      letter: 'E',
      sound: '../../assets/sounds/letters-fr/E (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/fourmi.png',
      srcMin: '../../assets/images/phone/alphabet-fr/fourmi.png',
      letter: 'F',
      sound: '../../assets/sounds/letters-fr/F (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/giraffe.png',
      srcMin: '../../assets/images/phone/alphabet-ru/giraffe.png',
      letter: 'G',
      sound: '../../assets/sounds/letters-fr/G (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/hippo.png',
      srcMin: '../../assets/images/phone/alphabet-fr/hippo.png',
      letter: 'H',
      sound: '../../assets/sounds/letters-fr/H (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/iguane.png',
      srcMin: '../../assets/images/phone/alphabet-fr/iguane.png',
      letter: 'I',
      sound: '../../assets/sounds/letters-fr/I (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/jupe.png',
      srcMin: '../../assets/images/phone/alphabet-fr/jupe.png',
      letter: 'J',
      sound: '../../assets/sounds/letters-fr/J (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/kangaroo.png',
      srcMin: '../../assets/images/phone/alphabet-eng/kangaroo.png',
      letter: 'K',
      sound: '../../assets/sounds/letters-fr/K (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/lion.png',
      srcMin: '../../assets/images/phone/alphabet-fr/lion.png',
      letter: 'L',
      sound: '../../assets/sounds/letters-fr/L (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/mouton.png',
      srcMin: '../../assets/images/phone/alphabet-fr/mouton.png',
      letter: 'M',
      sound: '../../assets/sounds/letters-fr/M (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/nid.png',
      srcMin: '../../assets/images/phone/alphabet-fr/nid.png',
      letter: 'N',
      sound: '../../assets/sounds/letters-fr/N (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/ours.png',
      srcMin: '../../assets/images/phone/alphabet-fr/ours.png',
      letter: 'O',
      sound: '../../assets/sounds/letters-fr/O (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/poulet.png',
      srcMin: '../../assets/images/phone/alphabet-fr/poulet.png',
      letter: 'P',
      sound: '../../assets/sounds/letters-fr/P (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/question.png',
      srcMin: '../../assets/images/phone/alphabet-fr/question.png',
      letter: 'Q',
      sound: '../../assets/sounds/letters-fr/Q (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/renard.png',
      srcMin: '../../assets/images/phone/alphabet-fr/renard.png',
      letter: 'R',
      sound: '../../assets/sounds/letters-fr/R (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/snail2.png',
      srcMin: '../../assets/images/phone/alphabet-ru/snail2.png',
      letter: 'S',
      sound: '../../assets/sounds/letters-fr/S (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/tiger.png',
      srcMin: '../../assets/images/phone/alphabet-eng/tiger.png',
      letter: 'T',
      sound: '../../assets/sounds/letters-fr/T (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/usine.png',
      srcMin: '../../assets/images/phone/alphabet-fr/usine.png',
      letter: 'U',
      sound: '../../assets/sounds/letters-fr/U (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/ru/cow.png',
      srcMin: '../../assets/images/phone/alphabet-ru/cow.png',
      letter: 'V',
      sound: '../../assets/sounds/letters-fr/V (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/fr/wapiti.png',
      srcMin: '../../assets/images/phone/alphabet-fr/wapiti.png',
      letter: 'W',
      sound: '../../assets/sounds/letters-fr/W (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/xylophone.png',
      srcMin: '../../assets/images/phone/alphabet-eng/xylophone.png',
      letter: 'X',
      sound: '../../assets/sounds/letters-fr/X (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/yak.png',
      srcMin: '../../assets/images/phone/alphabet-eng/yak.png',
      letter: 'Y',
      sound: '../../assets/sounds/letters-fr/Y (1).mp3'
    },
    {
      src: '../../assets/images/alphabet/eng/zebra.png',
      srcMin: '../../assets/images/phone/alphabet-eng/zebra.png',
      letter: 'Z',
      sound: '../../assets/sounds/letters-fr/Z (1).mp3'
    }
  ];
  pictures = [];
  picArray = [];
  gameArr = [];
  letters = [];
  index = 0;
  sound: string;
  state = 'normal';
  state2 = 'normal';

  constructor(public shared: SharedService, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        const url = event.url;
        if (url.includes('start-with?')) {
          this.letters = [];
          this.pictures = [];
          this.findLetter = '';
          this.checkLanguage();
          this.router.navigate([], {
            queryParams: {
              yourParamName: null,
              youCanRemoveMultiple: null,
            },
            queryParamsHandling: 'merge'
          });
          this.wrongAnswer = false;
          this.rightAnswer = false;
          this.state = 'normal';
          this.state2 = 'normal';
          this.gameArr = [];
          setTimeout(() => {
            this.generateMainLetter();
            this.playAudio();
            this.findRightPic();
          }, 800);
        }
      }
    });
  }

  ngOnInit() {
    this.checkLanguage();
    this.generateMainLetter();
    this.playAudio();
    this.findRightPic();
  }

  checkLanguage() {
    const lang = localStorage.getItem('language');
    if (lang === 'fr') {
      this.pictures = this.picArrFr;
      this.letters = this.alphabetEng;
    } else if (lang === 'en') {
      this.pictures = this.picArrEng;
      this.letters = this.alphabetEng;
    } else {
      this.pictures = this.picArr;
      this.letters = this.alphabetRus;
    }
    this.shared.shuffle(this.letters);
  }
  onAnimate() {
    this.state === 'normal' ? this.state = 'fadeIn' : this.state = 'normal';
  }

  onAnimateLetter() {
    this.state2 === 'normal' ? this.state2 = 'fadeIn' : this.state2 = 'normal';
  }

  findRightPic() {
    const arr = [];
    this.pictures.forEach(item => {
      arr.push(item);
    });
    this.picArray = arr;

    this.rightPic = arr.filter(it => it.letter === this.findLetter);
    const index = this.picArray.map(e => e.src).indexOf(this.rightPic[0].src);
    this.picArray.splice(index, 1);
    this.generateRandomPics();
    this.onAnimateLetter();
  }

  generateRandomPics() {
    let n;
    this.gameArr[0] = this.rightPic[0];
    for (let i = 1; i < 4; i++) {
      n = Math.floor(Math.random() * this.picArray.length);
      const pic = this.picArray[n];
      this.gameArr.push(pic);
      this.picArray.splice(n, 1);
    }
    this.shared.shuffle(this.gameArr);
  }

  playAudio() {
    this.pictures.forEach(letters => {
      if (letters.letter === this.findLetter) {
        this.sound = letters.sound;
        let audio = new Audio();
        audio.src = this.sound;
        audio.load();
        audio.play();
      }
    });
  }

  generateMainLetter() {
    this.rightAnswer = false;
    this.wrongAnswer = false;
    for (let i = 0; i < 1; i++) {
      this.findLetter = this.letters[this.index];
    }
    this.onAnimate();
  }

  checkPic(pic) {
    if (this.rightPic[0].src === pic.src) {
      // this.shared.correctSound();
      this.wrongAnswer = false;
      this.rightAnswer = true;
      this.state = 'normal';
      this.state2 = 'normal';
      this.gameArr = [];
      if (this.index < this.letters.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
      setTimeout(() => {
        this.generateMainLetter();
        this.playAudio();
        this.findRightPic();
      }, 800);
    } else {
      // this.shared.wrongSound();
      this.rightAnswer = false;
      this.wrongAnswer = true;
    }
  }

}
