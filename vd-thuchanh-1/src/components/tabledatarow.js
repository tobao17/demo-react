import React, { Component } from "react";

export class tabledatarow extends Component {
  permissionshow = () => {
    if (this.props.permission === 1) return "admin";
    else if (this.props.permission === 2) return "Modelrator";
    else return "Normal";
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
            <div className="btn btn-warning">
              <i className="fa fa-edit    ">Sửa</i>
            </div>
            <div className="btn btn-danger">
              <i className="fa fa-trash   ">Xóa</i>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default tabledatarow;
