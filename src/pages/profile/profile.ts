import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
Filters: string = "bio";
  constructor(public navCtrl: NavController) {

  }

  open(): void {
        console.log('open event');
        this.navCtrl.push('EventsPage');
    }

}
