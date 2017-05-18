import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Loading, LoadingController } from 'ionic-angular';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private loginForm: FormGroup;
  private loader: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  };

  login() {
    console.log(this.loginForm.value);
    this.navCtrl.push('TabsPage');
  }

  ionViewDidLoad() {
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

  presentLoader() {
    this.loader = this.loadingCtrl.create({
      spinner: 'ios',

    });
    this.loader.present();
    setTimeout(() => {
      this.loader.dismiss();
    }, 55000);
  }

}
