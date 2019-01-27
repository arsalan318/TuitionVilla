import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBe0wvJ4aFxGRlDUL-2XxO4-JyAo92FDfk",
    authDomain: "tuitionvilla-fa8dd.firebaseapp.com",
    databaseURL: "https://tuitionvilla-fa8dd.firebaseio.com",
    projectId: "tuitionvilla-fa8dd",
    storageBucket: "tuitionvilla-fa8dd.appspot.com",
    messagingSenderId: "231641434744"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
