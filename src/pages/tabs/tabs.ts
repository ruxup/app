import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'ExplorePage';
  tab3Root = 'CreateEventPage';
  tab4Root = 'EventsPage';  
  tab5Root = 'ProfilePage';

  constructor() {

  }
}
