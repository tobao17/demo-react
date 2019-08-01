import React, { Component } from "react";

export class tabledatarow extends Component {
  permissionshow = () => {
    if (this.props.permission === 1) return "admin";
    else if (this.props.permission === 2) return "Modelrator";
    else return "Normal";
  };
  deletefunction = id => {
    console.log(id);
  };
  render() {
    return (
      <tr>
        <td>{this.props.stt}</td>
        <td>{this.props.username}</td>
        <td>{this.props.tel}</td>
        <td>{this.permissionshow()}</td>
        <td>
          <div className="btn-group">
            <div
              className="btn btn-warning"
              onClick={value => this.props.chuyendulieu(value)}
            >
              <i className="fa fa-edit    ">Sửa</i>
            </div>
            <div
              className="btn btn-danger"
              onClick={id => this.props.deletefunction(this.props.id)}
            >
              <i className="fa fa-trash   ">Xóa</i>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default tabledatarow;
