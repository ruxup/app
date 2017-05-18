import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListEventsPage } from './list';


@NgModule({
  declarations: [
    ListEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListEventsPage),
    
  ],
  exports: [
    ListEventsPage,
  ]
})
export class ListEventPageModule { }