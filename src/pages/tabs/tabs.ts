import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ClockPage } from "../clock/clock";
import { ProfilePage } from "../profile/profile";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ClockPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
