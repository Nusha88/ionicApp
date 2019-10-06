import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class SharedService {

  constructor(public translate: TranslateService) {
  }
  changeLang() {
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

  setItem(key: string, data: any) {
    localStorage.setItem(key, data);
  }

  shuffle(array) {
    let m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  getLettersArray(array, newArr) {
    array.forEach(letters => {
      const letter = letters.letter;
      newArr.push(letter);
    });
  }

  correctSound() {
    let audio = new Audio();
    audio.src = '../../assets/sounds/correct.wav';
    audio.load();
    audio.play().then(() => {
      console.log('work');
    });
  }

  wrongSound() {
    let audio = new Audio();
    audio.src = '../../assets/sounds/wrong.wav';
    audio.load();
    audio.play();
  }
}
