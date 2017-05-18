import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { Validators } from '@angular/forms';
import { CountriesPage } from '../../explore/countries/countries';


@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html'
})
export class CreateEventPage {
  event: any;
  transferDate: string;
  startDate: String;
  endDate: String;
  categories: any;
  locations: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.startDate = new Date().toISOString();
    this.endDate = new Date(Date.now() + 86400000).toISOString();
    this.event = {
      name: '',
      category: '',
      location: '',
      start: '',
      end: '',
    };

    this.event.location = 'None';
  }

  create(): void {
    // this.event.start = this.formatDate(this.startDate);
    // this.event.end = this.formatDate(this.endDate); 
            this.navCtrl.push('EventsPage');

  }

  formatDate(d: String): String {
    if (d != null) {
        d = d.replace("T", ' ');
        d = d.replace("Z", '');
        return d.replace(/\.[0-9]{3}/, '');
    }
  }

   openCountry(): void {
     console.log('open country');
    let modal = this.modalCtrl.create(CountriesPage);
    modal.onDidDismiss(data => {
     console.log(data);
     this.event.location = data;
   });
       modal.present();
  }

  openEvent(): void {
        console.log('open event');
        this.navCtrl.push('EventsPage');
    }

  
}
