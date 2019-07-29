import React, { Component } from "react";

export class search extends Component {
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
              className="form-control"
              placeholder="nhập vào"
              style={{ width: "400px" }}
            />
            <div className="btn btn-info"> Tìm </div>
          </div>
        </form>
        {this.hienthinut()}
        <hr />
      </div>
    );
  }
}

export default search;
