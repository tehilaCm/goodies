import firebase from "firebase/app";
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDFtnhmlJUJMfmnRwJ4VIV7x2TQuGunxQU",
    authDomain: "goodies-20207.firebaseapp.com",
    databaseURL: "https://goodies-20207.firebaseio.com",
    projectId: "goodies-20207",
    storageBucket: "goodies-20207.appspot.com",
    messagingSenderId: "105598152143",
    appId: "1:105598152143:web:51602d245e237d6bf376ba",
    measurementId: "G-2KQKLCDS9R"
  };

export default firebase.initializeApp(firebaseConfig);
