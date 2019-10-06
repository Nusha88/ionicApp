import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {SharedService} from '../services/shared.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-make-a-word-from-letters',
  templateUrl: './make-a-word-from-letters.component.html',
  styleUrls: ['./make-a-word-from-letters.component.scss'],
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
    ])
  ]
})
export class MakeAWordFromLettersComponent implements OnInit {
  picArr = [
    {
      src: '../../../assets/images/make-a-word/ru/racoon.png',
      letters: ['Е', 'Н', 'О', 'Т'],
      rightOrder: ['Е', 'Н', 'О', 'Т']
    },
    {
      src: '../../../assets/images/make-a-word/ru/lion.png',
      letters: ['Л', 'Е', 'В'],
      rightOrder: ['Л', 'Е', 'В']
    },
    {
      src: '../../assets/images/make-a-word/ru/owl.png',
      letters: ['С', 'О', 'В', 'А'],
      rightOrder: ['С', 'О', 'В', 'А']
    },
    {
      src: '../../assets/images/make-a-word/ru/eagle.png',
      letters: ['О', 'Р', 'Ё', 'Л'],
      rightOrder: ['О', 'Р', 'Ё', 'Л']
    },
    {
      src: '../../assets/images/make-a-word/ru/sheep.png',
      letters: ['О', 'В', 'Ц', 'А'],
      rightOrder: ['О', 'В', 'Ц', 'А']
    },
    {
      src: '../../assets/images/make-a-word/ru/tiger.png',
      letters: ['Т', 'И', 'Г', 'Р'],
      rightOrder: ['Т', 'И', 'Г', 'Р']
    },
    {
      src: '../../assets/images/make-a-word/ru/stork.png',
      letters: ['А', 'И', 'С', 'Т'],
      rightOrder: ['А', 'И', 'С', 'Т']
    },
    {
      src: '../../assets/images/make-a-word/ru/ball.png',
      letters: ['М', 'Я', 'Ч'],
      rightOrder: ['М', 'Я', 'Ч']
    },
    {
      src: '../../assets/images/make-a-word/ru/balloons.png',
      letters: ['Ш', 'А', 'Р', 'Ы'],
      rightOrder: ['Ш', 'А', 'Р', 'Ы']
    },
    {
      src: '../../assets/images/make-a-word/ru/house.png',
      letters: ['Д', 'О', 'М'],
      rightOrder: ['Д', 'О', 'М']
    },
    {
      src: '../../assets/images/make-a-word/ru/bunny.png',
      letters: ['З', 'А', 'Я', 'Ц'],
      rightOrder: ['З', 'А', 'Я', 'Ц']
    },
    {
      src: '../../assets/images/make-a-word/ru/clock.png',
      letters: ['Ч', 'А', 'С', 'Ы'],
      rightOrder: ['Ч', 'А', 'С', 'Ы']
    },
    {
      src: '../../assets/images/make-a-word/ru/duck.png',
      letters: ['У', 'Т', 'К', 'А'],
      rightOrder: ['У', 'Т', 'К', 'А']
    },
    {
      src: '../../assets/images/make-a-word/ru/elephant.png',
      letters: ['С', 'Л', 'О', 'Н'],
      rightOrder: ['С', 'Л', 'О', 'Н']
    },
    {
      src: '../../assets/images/make-a-word/ru/fish.png',
      letters: ['Р', 'Ы', 'Б', 'А'],
      rightOrder: ['Р', 'Ы', 'Б', 'А']
    },
    {
      src: '../../assets/images/make-a-word/ru/fly.png',
      letters: ['М', 'У', 'Х', 'А'],
      rightOrder: ['М', 'У', 'Х', 'А']
    },
    {
      src: '../../assets/images/make-a-word/ru/fox.png',
      letters: ['Л', 'И', 'С', 'А'],
      rightOrder: ['Л', 'И', 'С', 'А']
    },
    {
      src: '../../assets/images/make-a-word/ru/snake.png',
      letters: ['З', 'М', 'Е', 'Я'],
      rightOrder: ['З', 'М', 'Е', 'Я']
    },
    {
      src: '../../assets/images/make-a-word/ru/moose.png',
      letters: ['Л', 'О', 'С', 'Ь'],
      rightOrder: ['Л', 'О', 'С', 'Ь']
    },
    {
      src: '../../assets/images/make-a-word/ru/mushroom.png',
      letters: ['Г', 'Р', 'И', 'Б'],
      rightOrder: ['Г', 'Р', 'И', 'Б']
    },
    {
      src: '../../assets/images/make-a-word/ru/whale.png',
      letters: ['К', 'И', 'Т'],
      rightOrder: ['К', 'И', 'Т']
    },
    {
      src: '../../assets/images/make-a-word/ru/cake.gif',
      letters: ['Т', 'О', 'Р', 'Т'],
      rightOrder: ['Т', 'О', 'Р', 'Т']
    },
    {
      src: '../../assets/images/make-a-word/eng/wolf.png',
      letters: ['В', 'О', 'Л', 'К'],
      rightOrder: ['В', 'О', 'Л', 'К']
    },
    {
      src: '../../assets/images/make-a-word/fr/jus.png',
      letters: ['С', 'О', 'К'],
      rightOrder: ['С', 'О', 'К']
    },
    {
      src: '../../assets/images/make-a-word/eng/goat.png',
      letters: ['К', 'О', 'З', 'А'],
      rightOrder: ['К', 'О', 'З', 'А']
    },
    {
      src: '../../assets/images/make-a-word/eng/crab.png',
      letters: ['К', 'Р', 'А', 'Б'],
      rightOrder: ['К', 'Р', 'А', 'Б']
    },
    {
      src: '../../assets/images/make-a-word/ru/kiwi.png',
      letters: ['К', 'И', 'В', 'И'],
      rightOrder: ['К', 'И', 'В', 'И']
    },
    {
      src: '../../assets/images/make-a-word/fr/jupe.png',
      letters: ['Ю', 'Б', 'К', 'А'],
      rightOrder: ['Ю', 'Б', 'К', 'А']
    }
  ];
  picArrEng = [
    {
      src: '../../../assets/images/make-a-word/eng/ant.png',
      letters: ['A', 'N', 'T'],
      rightOrder: ['A', 'N', 'T']
    },
    {
      src: '../../../assets/images/make-a-word/eng/lion.png',
      letters: ['L', 'I', 'O', 'N'],
      rightOrder: ['L', 'I', 'O', 'N']
    },
    {
      src: '../../assets/images/make-a-word/ru/owl.png',
      letters: ['O', 'W', 'L'],
      rightOrder: ['O', 'W', 'L']
    },
    {
      src: '../../assets/images/make-a-word/eng/bear.png',
      letters: ['B', 'E', 'A', 'R'],
      rightOrder: ['B', 'E', 'A', 'R']
    },
    {
      src: '../../assets/images/make-a-word/eng/bee.png',
      letters: ['B', 'E', 'E'],
      rightOrder: ['B', 'E', 'E']
    },
    {
      src: '../../assets/images/make-a-word/eng/bird.png',
      letters: ['B', 'I', 'R', 'D'],
      rightOrder: ['B', 'I', 'R', 'D']
    },
    {
      src: '../../assets/images/make-a-word/eng/book.png',
      letters: ['B', 'O', 'O', 'K'],
      rightOrder: ['B', 'O', 'O', 'K']
    },
    {
      src: '../../assets/images/make-a-word/ru/ball.png',
      letters: ['B', 'A', 'L', 'L'],
      rightOrder: ['B', 'A', 'L', 'L']
    },
    {
      src: '../../assets/images/make-a-word/eng/bus.png',
      letters: ['B', 'U', 'S'],
      rightOrder: ['B', 'U', 'S']
    },
    {
      src: '../../assets/images/make-a-word/eng/car.png',
      letters: ['C', 'A', 'R'],
      rightOrder: ['C', 'A', 'R']
    },
    {
      src: '../../assets/images/make-a-word/eng/cat.png',
      letters: ['C', 'A', 'T'],
      rightOrder: ['C', 'A', 'T']
    },
    {
      src: '../../assets/images/make-a-word/eng/cow.png',
      letters: ['C', 'O', 'W'],
      rightOrder: ['C', 'O', 'W']
    },
    {
      src: '../../assets/images/make-a-word/ru/duck.png',
      letters: ['D', 'U', 'C', 'K'],
      rightOrder: ['D', 'U', 'C', 'K']
    },
    {
      src: '../../assets/images/make-a-word/eng/crab.png',
      letters: ['C', 'R', 'A', 'B'],
      rightOrder: ['C', 'R', 'A', 'B']
    },
    {
      src: '../../assets/images/make-a-word/ru/fish.png',
      letters: ['F', 'I', 'S', 'H'],
      rightOrder: ['F', 'I', 'S', 'H']
    },
    {
      src: '../../assets/images/make-a-word/ru/fly.png',
      letters: ['F', 'L', 'Y'],
      rightOrder: ['F', 'L', 'Y']
    },
    {
      src: '../../assets/images/make-a-word/ru/fox.png',
      letters: ['F', 'O', 'X'],
      rightOrder: ['F', 'O', 'X']
    },
    {
      src: '../../assets/images/make-a-word/eng/dog.png',
      letters: ['D', 'O', 'G'],
      rightOrder: ['D', 'O', 'G']
    },
    {
      src: '../../assets/images/make-a-word/eng/egg.png',
      letters: ['E', 'G', 'G'],
      rightOrder: ['E', 'G', 'G']
    },
    {
      src: '../../assets/images/make-a-word/eng/frog.png',
      letters: ['F', 'R', 'O', 'G'],
      rightOrder: ['F', 'R', 'O', 'G']
    },
    {
      src: '../../assets/images/make-a-word/eng/goat.png',
      letters: ['G', 'O', 'A', 'T'],
      rightOrder: ['G', 'O', 'A', 'T']
    },
    {
      src: '../../assets/images/make-a-word/eng/kite.png',
      letters: ['K', 'I', 'T', 'E'],
      rightOrder: ['K', 'I', 'T', 'E']
    },
    {
      src: '../../assets/images/make-a-word/eng/pear.png',
      letters: ['P', 'E', 'A', 'R'],
      rightOrder: ['P', 'E', 'A', 'R']
    },
    {
      src: '../../assets/images/make-a-word/eng/sun.png',
      letters: ['S', 'U', 'N'],
      rightOrder: ['S', 'U', 'N']
    },
    {
      src: '../../assets/images/make-a-word/eng/wolf.png',
      letters: ['W', 'O', 'L', 'F'],
      rightOrder: ['W', 'O', 'L', 'F']
    },
    {
      src: '../../assets/images/make-a-word/eng/worm.png',
      letters: ['W', 'O', 'R', 'M'],
      rightOrder: ['W', 'O', 'R', 'M']
    },
    {
      src: '../../assets/images/make-a-word/ru/cake.gif',
      letters: ['C', 'A', 'K', 'E'],
      rightOrder: ['C', 'A', 'K', 'E']
    },
    {
      src: '../../assets/images/make-a-word/ru/kiwi.png',
      letters: ['K', 'I', 'W', 'I'],
      rightOrder: ['K', 'I', 'W', 'I']
    }
  ];
  picArrFr = [
    {
      src: '../../assets/images/make-a-word/ru/kiwi.png',
      letters: ['K', 'I', 'W', 'I'],
      rightOrder: ['K', 'I', 'W', 'I']
    },
    {
      src: '../../assets/images/make-a-word/fr/chou.png',
      letters: ['C', 'H', 'O', 'U'],
      rightOrder: ['C', 'H', 'O', 'U']
    },
    {
      src: '../../assets/images/make-a-word/fr/jupe.png',
      letters: ['J', 'U', 'P', 'E'],
      rightOrder: ['J', 'U', 'P', 'E']
    },
    {
      src: '../../assets/images/make-a-word/fr/jus.png',
      letters: ['J', 'U', 'S'],
      rightOrder: ['J', 'U', 'S']
    },
    {
      src: '../../assets/images/make-a-word/fr/koala.png',
      letters: ['K', 'O', 'A', 'L', 'A'],
      rightOrder: ['K', 'O', 'A', 'L', 'A']
    },
    {
      src: '../../assets/images/make-a-word/fr/lapin.png',
      letters: ['L', 'A', 'P', 'I', 'N'],
      rightOrder: ['L', 'A', 'P', 'I', 'N']
    },
    {
      src: '../../assets/images/make-a-word/fr/pain.png',
      letters: ['P', 'A', 'I', 'N'],
      rightOrder: ['P', 'A', 'I', 'N']
    },
    {
      src: '../../assets/images/make-a-word/fr/panda.png',
      letters: ['P', 'A', 'N', 'D', 'A'],
      rightOrder: ['P', 'A', 'N', 'D', 'A']
    },
    {
      src: '../../assets/images/make-a-word/fr/poule.png',
      letters: ['P', 'O', 'U', 'L', 'E'],
      rightOrder: ['P', 'O', 'U', 'L', 'E']
    },
    {
      src: '../../assets/images/make-a-word/fr/singe.png',
      letters: ['S', 'I', 'N', 'G', 'E'],
      rightOrder: ['S', 'I', 'N', 'G', 'E']
    },
    {
      src: '../../assets/images/make-a-word/fr/tigre.png',
      letters: ['T', 'I', 'G', 'R', 'E'],
      rightOrder: ['T', 'I', 'G', 'R', 'E']
    },
    {
      src: '../../assets/images/make-a-word/fr/zebre.png',
      letters: ['Z', 'E', 'B', 'R', 'E'],
      rightOrder: ['Z', 'E', 'B', 'R', 'E']
    },
    {
      src: '../../assets/images/make-a-word/eng/lion.png',
      letters: ['L', 'I', 'O', 'N'],
      rightOrder: ['L', 'I', 'O', 'N']
    },
    {
      src: '../../assets/images/make-a-word/eng/cat.png',
      letters: ['C', 'H', 'A', 'T'],
      rightOrder: ['C', 'H', 'A', 'T']
    },
    {
      src: '../../assets/images/make-a-word/eng/dog.png',
      letters: ['C', 'H', 'I', 'E', 'N'],
      rightOrder: ['C', 'H', 'I', 'E', 'N']
    },
    {
      src: '../../assets/images/make-a-word/eng/cow.png',
      letters: ['V', 'A', 'C', 'H', 'E'],
      rightOrder: ['V', 'A', 'C', 'H', 'E']
    },
    {
      src: '../../assets/images/make-a-word/eng/crab.png',
      letters: ['C', 'R', 'A', 'B', 'E'],
      rightOrder: ['C', 'R', 'A', 'B', 'E']
    },
    {
      src: '../../assets/images/make-a-word/eng/bear.png',
      letters: ['O', 'U', 'R', 'S'],
      rightOrder: ['O', 'U', 'R', 'S']
    },
    {
      src: '../../assets/images/make-a-word/eng/worm.png',
      letters: ['V', 'E', 'R'],
      rightOrder: ['V', 'E', 'R']
    },
    {
      src: '../../assets/images/make-a-word/eng/egg.png',
      letters: ['O', 'E', 'U', 'F'],
      rightOrder: ['O', 'E', 'U', 'F']
    },
    {
      src: '../../assets/images/make-a-word/eng/wolf.png',
      letters: ['L', 'O', 'U', 'P'],
      rightOrder: ['L', 'O', 'U', 'P']
    }
  ];
  pictures = [];
  index = 0;
  showPic: any;
  picLetters = [];
  wrongAnswer = false;
  rightAnswer = false;
  state = 'normal';

  constructor(public shared: SharedService, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        const url = event.url;
        if (url.includes('make-a-word-from-letters?')) {
          this.pictures = [];
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
          setTimeout(() => {
            this.chooseShowedPic();
          }, 800);
        }
      }
    });
  }

  onAnimate() {
    this.state === 'normal' ? this.state = 'fadeIn' : this.state = 'normal';
  }

  checkLanguage() {
    const lang = localStorage.getItem('language');
    if (lang === 'fr') {
      this.pictures = this.picArrFr;
    } else if (lang === 'en') {
      this.pictures = this.picArrEng;
    } else {
      this.pictures = this.picArr;
    }
  }
  chooseShowedPic() {
    this.showPic = this.pictures[this.index];
    this.onAnimate();
    this.picLetters = this.shared.shuffle(this.pictures[this.index].letters);
    let curItem = this.pictures[this.index].rightOrder;
    let dragItem = this.picLetters;
    if (curItem.toString() === dragItem.toString()) {
      this.picLetters = this.shared.shuffle(this.pictures[this.index].letters);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.picLetters, event.previousIndex, event.currentIndex);
    let curItem = this.pictures[this.index].rightOrder;
    let dragItem = this.picLetters;
    if (curItem.toString() === dragItem.toString()) {
      this.rightAnswer = true;
      this.wrongAnswer = false;
      this.shared.correctSound();
      this.state = 'normal';
      setTimeout(() => {
        this.rightAnswer = false;
        if (this.index < this.pictures.length - 1) {
          this.index ++;
        } else {
          this.index = 0;
        }
        this.chooseShowedPic();
        this.rightAnswer = false;
        this.wrongAnswer = false;
      }, 200);
    } else {
      this.rightAnswer = false;
      this.wrongAnswer = true;
    }
  }

  ngOnInit() {
    this.checkLanguage();
    this.shared.shuffle(this.pictures);
    this.chooseShowedPic();
  }
}
