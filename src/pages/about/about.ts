import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Component
 */
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
  /**
   * About Page Constructor
   *
   * @param {NavController} navCtrl
   */
  constructor(public navCtrl: NavController) {

  }

}
