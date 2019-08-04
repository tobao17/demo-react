import React, { Component } from "react";
import New from "./components/New.js";

import { connect } from "react-redux";
export class App extends Component {
  // useEditstatusinstore = () => {
  //   var dispatch = this.props.dispatch;
  //   dispatch({ type: "CHANGE_EDIT_STATUS" });
  // };
  render() {
    return (
      <div>
        <h2>day la components app</h2>
        <button onClick={() => this.props.useEditstatusinstore()}>
          click here
        </button>
        <New />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    useEditstatusinstore: () => {
      dispatch({ type: "CHANGE_EDIT_STATUS" });
    }
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
