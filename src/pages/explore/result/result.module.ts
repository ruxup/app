import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExploreResultsPage } from './result';


@NgModule({
  declarations: [
    ExploreResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExploreResultsPage),
    
  ],
  exports: [
    ExploreResultsPage,
  ]
})
export class ExploreResultsPageModule { }