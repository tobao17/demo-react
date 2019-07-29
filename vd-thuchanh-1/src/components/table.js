import React, { Component } from "react";
import Tabledatarow from "./tabledatarow.js";
export class table extends Component {
  mappingdatauser = () =>
    this.props.datauser.map((value, key) => (
      <Tabledatarow
        stt={key}
        username={value.Name}
        tel={value.tel}
        permission={value.permission}
      />
    ));

  render() {
    return (
      <div className="col">
        <table className="table table-striped table-inverse table-hover ">
          {/* table-reposive tu dong co dan */}
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện Thoại</th>

              <th>Quyền</th>
              <th>Thao Tác</th>
            </tr>
          </thead>

          <tbody>{this.mappingdatauser()}</tbody>
        </table>
      </div>
    );
  }
}

export default table;
