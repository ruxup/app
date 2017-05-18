import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  Filters: string = "detail";

  constructor(public navCtrl: NavController) {

  }

  back(): void {
    this.navCtrl.pop();
  }

}
