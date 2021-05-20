// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as firebase from 'firebase';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC4I1gNEACmW-Kr8hRTacDZCJJahHirMA0",
    authDomain: "prueba-firebase-f5e6b.firebaseapp.com",
    databaseURL: "https://prueba-firebase-f5e6b.firebaseio.com",
    projectId: "prueba-firebase-f5e6b",
    storageBucket: "prueba-firebase-f5e6b.appspot.com",
    messagingSenderId: "654245747267",
    appId: "1:654245747267:web:068eb4acd051ec666712f6",
    measurementId: "G-GS7EMM2Q4S"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
