import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-events',
  templateUrl: 'list.html'
})
export class ListEventsPage {

  constructor(public navCtrl: NavController) {

  }

  openEvent(): void {
        console.log('open event');
        this.navCtrl.push('EventsPage');
    }

}
