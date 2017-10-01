import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCvzxA1x_ov-4qpU913FP_a_WanC5Fmwvg",
  authDomain: "ionic-training-c1603.firebaseapp.com",
  databaseURL: "https://ionic-training-c1603.firebaseio.com",
  projectId: "ionic-training-c1603",
  storageBucket: "ionic-training-c1603.appspot.com",
  messagingSenderId: "951903650715"
};

@Injectable()
export class FirebaseProvider {
  constructor() {
    firebase.initializeApp(config);
  }

  storage() {
    return firebase.storage();
  }

  auth(){
    return firebase.auth();
  }

  database(){
    return firebase.database();
  }

  uploadFile(dataUrl, filename) {
    return firebase
      .storage()
      .ref()
      .child("uploads/" + filename)
      .putString(dataUrl, "data_url");
  }
}
