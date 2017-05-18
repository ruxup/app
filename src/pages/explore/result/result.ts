import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { Platform } from 'ionic-angular';


@IonicPage()
@Component({
    selector: 'page-explore-results',
    templateUrl: 'result.html'
})
export class ExploreResultsPage {

    constructor(public navCtrl: NavController, platform: Platform,
    ) {
    }

    back(): void {
        this.navCtrl.pop()
    }

    openEvent(): void {
        console.log('open event');
        this.navCtrl.push('EventsPage');
    }



}
