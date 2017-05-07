import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-interest',
  templateUrl: 'interest.html',
})
export class InterestPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Interest');
  }



}
