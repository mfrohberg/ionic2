import {Component} from 'angular2/angular2';
import {Control, ControlGroup} from 'angular2/forms';

import {IonicApp, App, Http} from 'ionic/ionic';

import {Camera, Geolocation, Vibration, Battery, Device} from 'ionic/ionic';

import {CameraPage} from 'pages/camera';
import {BatteryPage} from 'pages/battery';
import {ContactsPage} from 'pages/contacts';
import {DevicePage} from 'pages/device';
import {DeviceMotionPage} from 'pages/device-motion';
import {DeviceOrientationPage} from 'pages/device-orientation';
import {DialogsPage} from 'pages/dialogs';
import {FilePage} from 'pages/file';
import {GeolocationPage} from 'pages/geolocation';
import {VibrationPage} from 'pages/vibration';

@App({
  templateUrl: 'main.html'
})
class MyApp {
  constructor(app: IonicApp) {
    this.app = app;

    this.firstPage = CameraPage;

    this.plugins = [
      {title: 'Camera', page: CameraPage},
      {title: 'Device', page: DevicePage},
      {title: 'Device Motion', page: DeviceMotionPage},
      {title: 'Device Orientation', page: DeviceOrientationPage},
      {title: 'Dialogs', page: DialogsPage},
      //{title: 'File', page: FilePage},
      {title: 'Geolocation', page: GeolocationPage},
      {title: 'Contacts', page: ContactsPage},
      {title: 'Battery', page: BatteryPage},
      {title: 'Vibration', page: VibrationPage},
    ]
  }

  openPage(menu, page) {
   menu.close();

   let nav = this.app.getComponent('myNav');
   nav.setItems([page.page]);
 }
}
