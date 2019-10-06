import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {SharedService} from '../services/shared.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-make-the-same-row',
  templateUrl: './make-the-same-row.component.html',
  styleUrls: ['./make-the-same-row.component.scss'],
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
export class MakeTheSameRowComponent implements OnInit {
  index = 1;
  wrongAnswer = false;
  rightAnswer = false;
  picArray = [
    {
      src: '../../assets/images/make-the-same-row/bear.png',
    },
    {
      src: '../../assets/images/make-the-same-row/bee.png',
    },
    {
      src: '../../assets/images/make-the-same-row/giraffe.png',
    },
    {
      src: '../../assets/images/make-the-same-row/panda.png',
    },
    {
      src: '../../assets/images/make-the-same-row/goat.png',
    },
    {
      src: '../../assets/images/make-the-same-row/lion.png',
    },
    {
      src: '../../assets/images/make-the-same-row/bunny.png',
    },
    {
      src: '../../assets/images/make-the-same-row/camel.png',
    },
    {
      src: '../../assets/images/make-the-same-row/chameleon.png',
    },
    {
      src: '../../assets/images/make-the-same-row/fox.png',
    },
    {
      src: '../../assets/images/make-the-same-row/elephant.png',
    },
    {
      src: '../../assets/images/make-the-same-row/owl2.png',
    },
    {
      src: '../../assets/images/make-the-same-row/buterfly.png',
    },
    {
      src: '../../assets/images/make-the-same-row/cat.png',
    },
    {
      src: '../../assets/images/make-the-same-row/duck2.png',
    },
    {
      src: '../../assets/images/make-the-same-row/frog.png',
    },
    {
      src: '../../assets/images/make-the-same-row/parrot.png',
    },
    {
      src: '../../assets/images/make-the-same-row/goose.png',
    },
    {
      src: '../../assets/images/make-the-same-row/peacock.png',
    },
    {
      src: '../../assets/images/make-the-same-row/shark.png',
    },
    {
      src: '../../assets/images/make-the-same-row/whale.png',
    },
    {
      src: '../../assets/images/make-the-same-row/zebra.png',
    },
  ];
  gameArr = [];
  draggbleArr = [];
  state = 'normal';

  constructor(public shared: SharedService, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        if (event.url.includes('make-the-same-row?')) {
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.draggbleArr, event.previousIndex, event.currentIndex);
      let curItem = this.gameArr[event.currentIndex];
      let dragItem = this.draggbleArr[event.currentIndex];
      if (curItem === dragItem) {
        this.rightAnswer = true;
        this.wrongAnswer = false;
        this.checkRightOrder();
      } else {
        this.rightAnswer = false;
        this.wrongAnswer = true;

      }
  }
  onAnimate() {
    this.state === 'normal' ? this.state = 'fadeIn' : this.state = 'normal';
  }

  choosePics() {
    const picArr = this.picArray;
    const shuffled = picArr.sort(() => 0.5 - Math.random());
    this.gameArr = shuffled.slice(0, 5);
    this.onAnimate();
  }

  draggblePics() {
    const n = 5;
    const sample = this.gameArr
      .map(x => ({x, r: Math.random()}))
      .sort((a, b) => a.r - b.r)
      .map(a => a.x)
      .slice(0, n);
    this.draggbleArr = sample;
  }

  checkRightOrder() {
    let curItem = this.gameArr;
    let dragItem = this.draggbleArr;
    if (curItem[0].src === dragItem[0].src &&
      curItem[1].src === dragItem[1].src &&
      curItem[2].src === dragItem[2].src &&
      curItem[3].src === dragItem[3].src &&
      curItem[4].src === dragItem[4].src) {
      this.state = 'normal';
      this.shared.correctSound();
      this.rightAnswer = true;
      this.wrongAnswer = false;
      setTimeout(() => {
        this.rightAnswer = false;
        this.choosePics();
        this.draggblePics();
      }, 500);
    }
  }

  ngOnInit() {
    this.choosePics();
    this.draggblePics();
  }

}
