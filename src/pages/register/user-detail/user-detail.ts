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
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {
  private register: FormGroup;
  private dob: String;
  private selectedGender: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.register = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  logForm(){
    console.log(this.register.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  next(){
    this.navCtrl.push('TabsPage');
  }

  chooseGender(gender: String) {
    this.selectedGender = gender;
    console.log(gender);
  }

}
