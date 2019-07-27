import React, { Component } from "react";

export default class noidung extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(" props component will receiveprops dang chay ");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(" props sould component update dang chay ");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(" props componentwill update dang chay");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(" props component did update dang chay");
  }

  render() {
    return (
      <div>
        <h4>{this.props.ten} </h4>
      </div>
    );
  }
}
