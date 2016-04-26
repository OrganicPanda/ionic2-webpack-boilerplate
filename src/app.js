// import {App, IonicApp, Events, Platform} from 'ionic-angular';
// import {StatusBar} from 'ionic-native';
// import {ConferenceData} from './providers/conference-data';
// import {UserData} from './providers/user-data';
// import {TabsPage} from './pages/tabs/tabs';
// import {LoginPage} from './pages/login/login';
// import {SignupPage} from './pages/signup/signup';
// import {TutorialPage} from './pages/tutorial/tutorial';

console.log('yo');

import 'meteor-imports';
// import { Meteor } from 'meteor/meteor';
// import { Mongo } from 'meteor/mongo';

// console.log('Meteor', Meteor);
// console.log('Mongo', Mongo);

// import { App, Platform } from 'ionic-angular';
// import { StatusBar } from 'ionic-native';
// // import { SplashPage } from './pages/login/splash';

// @App({
//   // templateUrl: 'build/app.html',
//   template: 'Yooooo',
//   config: {
//     mode: 'ios' // Temporary until I get time to fix MD/WP
//     // pageTransition: 'ios-transition' // TODO: Could help with image pages?
//   }
// })
// class MyApp {
//   static get parameters() {
//     return [[Platform]];
//   }

//   constructor(platform) {
//     console.log('app constructor');
//     this.platform = platform;
//     // this.rootPage = SplashPage;

//     this.platform.ready().then(() => {
//       // Okay, so the platform is ready and our plugins are available.
//       // Here you can do any higher level native things you might need.
//       StatusBar.styleDefault();
//     });
//   }
// }


// @App({
//   template: require('./app.html'),
//   // providers: [ConferenceData, UserData],
//   config: {},
//   // prodMode: __DEV__ ? false : true
// })
// class ConferenceApp {
//   // List of pages that can be navigated to from the left menu
//   // the left menu only works after login
//   // the login page disables the left menu
//   // appPages: [
//   //   { title: 'Schedule', component: TabsPage, icon: 'calendar' },
//   //   { title: 'Speakers', component: TabsPage, index: 1, icon: 'contacts' },
//   //   { title: 'Map', component: TabsPage, index: 2, icon: 'map' },
//   //   { title: 'About', component: TabsPage, index: 3, icon: 'information-circle' },
//   // ];
//   // loggedInPages: [
//   //   { title: 'Logout', component: TabsPage, icon: 'log-out' }
//   // ];
//   // loggedOutPages: [
//   //   { title: 'Login', component: LoginPage, icon: 'log-in' },
//   //   { title: 'Signup', component: SignupPage, icon: 'person-add' }
//   // ];
//   // rootPage: TutorialPage;
//   // loggedIn: false;

//   constructor(
//     // private app: IonicApp,
//     // private events: Events,
//     // private userData: UserData,
//     // platform: Platform,
//     // confData: ConferenceData
//   ) {
//     // Call any initial plugins when ready
//     // platform.ready().then(() => {
//     //   StatusBar.styleDefault();
//     // });

//     // // load the conference data
//     // confData.load();
//     //
//     // // decide which menu items should be hidden by current login status stored in local storage
//     // this.userData.hasLoggedIn().then((hasLoggedIn) => {
//     //   this.loggedIn = (hasLoggedIn == 'true');
//     // });
//     //
//     // this.listenToLoginEvents();
//   }

//   // openPage(page: PageObj) {
//   //   // find the nav component and set what the root page should be
//   //   // reset the nav to remove previous pages and only have this page
//   //   // we wouldn't want the back button to show in this scenario
//   //   let nav = this.app.getComponent('nav');
//   //
//   //   if (page.index) {
//   //     nav.setRoot(page.component, {tabIndex: page.index});
//   //   } else {
//   //     nav.setRoot(page.component);
//   //   }
//   //
//   //   if (page.title === 'Logout') {
//   //     // Give the menu time to close before changing to logged out
//   //     setTimeout(() => {
//   //       this.userData.logout();
//   //     }, 1000);
//   //   }
//   // }
//   //
//   // listenToLoginEvents() {
//   //   this.events.subscribe('user:login', () => {
//   //     this.loggedIn = true;
//   //   });
//   //
//   //   this.events.subscribe('user:signup', () => {
//   //     this.loggedIn = true;
//   //   });
//   //
//   //   this.events.subscribe('user:logout', () => {
//   //     this.loggedIn = false;
//   //   });
//   // }
// }
