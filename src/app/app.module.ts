import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2wk7626g7UEuxueQJHuoZX6em-fOVGCM",
  authDomain: "better-journal.firebaseapp.com",
  databaseURL: "https://better-journal.firebaseio.com",
  projectId: "better-journal",
  storageBucket: "better-journal.appspot.com",
  messagingSenderId: "939383302943",
  appId: "1:939383302943:web:26fbfc4b2699faf1539e2a",
  measurementId: "G-MC2BX1G14S"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
