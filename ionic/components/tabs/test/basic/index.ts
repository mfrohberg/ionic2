  import {App, Page, NavController} from 'ionic/ionic';

//
// Tab 1
//
@Page({
  template: `
    <ion-navbar *navbar>
      <ion-title>Heart</ion-title>
    </ion-navbar>
    <ion-content>
      <ion-list>
        <ion-list-header>
          Tab 1
        </ion-list-header>
        <ion-item *ngFor="#i of items">Item {{i}} {{i}} {{i}} {{i}}</ion-item>
      </ion-list>
    </ion-content>
    `
})
class Tab1 {
  constructor(nav: NavController) {
    this.nav = nav;

    this.items = [];
    for(var i = 1; i <= 250; i++) {
      this.items.push(i);
    }
  }
}

//
// Tab 2
//
@Page({
  template: `
    <ion-navbar *navbar>
      <ion-title>Schedule</ion-title>
    </ion-navbar>
    <ion-content>
      <ion-list>
        <ion-item-sliding *ngFor="#session of sessions" #slidingItem>
          <ion-item>
            <h3>{{session.name}} {{session.name}} {{session.name}}</h3>
            <p>{{session.location}} {{session.location}} {{session.location}}</p>
          </ion-item>
          <ion-item-options>
            <button primary>Speaker<br>Info</button>
            <button secondary>Add to<br>Favorites</button>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-content>
  `
})
class Tab2 {
  constructor() {
    this.sessions = [];
    for(var i = 1; i <= 250; i++) {
      this.sessions.push({
        name: 'Name ' + i,
        location: 'Location: ' + i
      });
    }
  }
}

//
// Tab 3
//
@Page({
  template: `
    <ion-navbar *navbar>
      <button menuToggle>
        <icon menu></icon>
      </button>
      <ion-title>Stopwatch</ion-title>
    </ion-navbar>
    <ion-content padding>
      <h2>Tab 3</h2>
    </ion-content>
    `
})
class Tab3 {}


@App({
  template: `
    <ion-menu [content]="content">
      <ion-toolbar secondary>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
      <ion-content>
        <ion-list>
          <button ion-item menuClose detail-none>
            Close Menu
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-tabs #content>
      <ion-tab tabTitle="Plain List" tabIcon="star" [root]="root1"></ion-tab>
      <ion-tab tabTitle="Schedule" tabIcon="globe" [root]="root2"></ion-tab>
      <ion-tab tabTitle="Stopwatch" tabIcon="stopwatch" [root]="root3"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  constructor() {
    this.root1 = Tab1;
    this.root2 = Tab2;
    this.root3 = Tab3;
  }
}
