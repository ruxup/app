import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  Filters: string = "location";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, platform: Platform) {
    this.isAndroid = platform.is('android');
  }

}
