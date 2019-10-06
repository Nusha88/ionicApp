import {Component} from '@angular/core';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public shared: SharedService) {
      this.shared.changeLang();
  }

}
