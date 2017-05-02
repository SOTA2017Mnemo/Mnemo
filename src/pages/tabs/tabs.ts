import { Component } from '@angular/core';

import { YearsPage } from '../years/years';
import { ContactPage } from '../contact/contact';
import { IndexPage } from '../index/index';
 
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = IndexPage;
  tab2Root = YearsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
