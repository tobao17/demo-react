import React, { Component } from "react";

export class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temvalue: ""
    };
  }

  ischange = event => {
    this.setState({
      temvalue: event.target.value
    });
    this.props.check(this.state.temvalue);
  };
  hienthinut = () => {
    if (this.props.hienthiform === true) {
      return (
        <div className="btn btn-outline-info" onClick={this.props.ketnoi}>
          Thêm mới
        </div>
      );
    } else
      return (
        <div className="btn btn-outline-info" onClick={this.props.ketnoi}>
          Đóng lại
        </div>
      );
  };
  render() {
    return (
      <div className="col-sm-12">
        <form className="form-inline">
          <div className="form-group">
            <input
              type="text"
              onChange={event => this.ischange(event)}
              className="form-control"
              placeholder="nhập vào"
              style={{ width: "400px" }}
            />
            <div
              className="btn btn-info "
              onClick={dl => this.props.check(this.state.temvalue)}
            >
              Tìm
            </div>
          </div>
        </form>
        {this.hienthinut()}
        <hr />
      </div>
    );
  }
}

export default search;
