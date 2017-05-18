import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { CountriesPage } from './countries/countries';


@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  Filters: string = "location";
  isAndroid: boolean = false;
  startDate: String;
  location: any;

  constructor(public navCtrl: NavController, platform: Platform,
    public modalCtrl: ModalController, ) {
    this.isAndroid = platform.is('android');
    this.startDate = new Date().toISOString();
  }

  openCountry(): void {
    console.log('open country');
    let modal = this.modalCtrl.create(CountriesPage);
    modal.onDidDismiss(data => {
      console.log(data);
      this.location = data;
    });
    modal.present();
  }

  search(): void {
        this.navCtrl.push('ExploreResultsPage')

  }

}
