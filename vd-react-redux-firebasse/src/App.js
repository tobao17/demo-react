import React, { Component } from "react";
import * as firebase from "firebase";
import { firebaseconnect } from "./firebase.js";
export default class App extends Component {
  pushdata = () => {
    var connectdata = firebase.database().ref("datafornote");
    connectdata.push({
      title: "ghi chu so 3",
      contnent: "noi dung ghi chu so 3"
    });
  };
  deletedata = id => {
    var connectiondata = firebase.database().ref("datafornote");
    connectiondata.child(id).remove();
    console.log("xoa thanh cong");
  };
  render() {
    return (
      <div>
        <button onClick={() => this.pushdata()}>
          {" "}
          click de them moi bang ham push{" "}
        </button>
        <button onClick={() => this.deletedata("note3")}>
          click de xoa bang ham delete
        </button>
      </div>
    );
  }
}
