import React, { Component } from "react";
import Noidung from "./noidung/noidung.js";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: "khoi tao",
      trangthai2: "khoitao2"
    };
  }
  componentWillMount() {
    console.log("component will mount dang chay..");
  }
  componentDidMount() {
    console.log("component did mount da chay...");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("sould component update dang chay ");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentwill update dang chay");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component did update dang chay");
  }
  capnhat = () => {
    this.setState({
      trangthai: "tran thai duoc cap nhat",
      trangthai2: "trang thai 2 duoc cap nhat"
    });
  };

  render() {
    console.log("reder dang chay ");

    return (
      <div>
        <button onClick={() => this.capnhat()}>click update</button>
        <Noidung ten={this.state.trangthai2} />
      </div>
    );
  }
}
