import {NgControl, FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup} from 'angular2/common';

import {App} from 'ionic/ionic';
import {SearchPipe} from 'ionic/components/searchbar/searchbar';


function randomTitle() {
  var items = ['Soylent', 'Pizza', 'Pumpkin', 'Apple', 'Bologna', 'Turkey', 'Kabob', 'Salad', 'Fruit bowl', 'Fish Tacos', 'Chimichongas', 'Meatloaf'];
  return items[Math.floor(Math.random() * items.length)];
}

@App({
  templateUrl: 'main.html',
  providers: [NgControl],
  directives: [FORM_DIRECTIVES]
})
class E2EApp {
  constructor() {
    var fb = new FormBuilder();

    this.searchQuery = '';

    this.items = []
    for(let i = 0; i < 100; i++) {
      this.items.push({
        title: randomTitle()
      })
    }
  }

  getItems() {
    var q = this.searchQuery;
    if(q.trim() == '') {
      return this.items;
    }
    return this.items.filter((v) => {
      if(v.title.toLowerCase().indexOf(q.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    })
  }
}
