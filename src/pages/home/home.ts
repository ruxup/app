import { ViewChild, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  ngAfterViewInit() {
    this.initSlider();

  }

  initSlider() {
    this.slides.pager = true;
    this.slides.loop = true;
    this.slides.speed = 500;
    this.slides.autoplay = 8000;
    // this.slides.effect = "fade";
  }

}
