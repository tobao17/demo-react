import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBuZln5TW35D2cpBBf0IZEhdu8cwHevkM8",
  authDomain: "notejs-2bb1e.firebaseapp.com",
  databaseURL: "https://notejs-2bb1e.firebaseio.com",
  projectId: "notejs-2bb1e",
  storageBucket: "notejs-2bb1e.appspot.com",
  messagingSenderId: "527136314393",
  appId: "1:527136314393:web:b083cff264bd22d4"
};

export const firebaseconnect = firebase.initializeApp(firebaseConfig);

var data = firebase.database().ref("datafornote/note2");
data.set({
  id: 2,
  title: "ghi chu 20/12",
  content: "demo content for node"
});
// data.once("value").then(function(snapshot) {
//   console.log(snapshot.val());
// });
