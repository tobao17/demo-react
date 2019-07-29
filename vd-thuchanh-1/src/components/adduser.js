import React, { Component } from "react";

export class adduser extends Component {
  hienthiadd = () => {
    if (this.props.hienthiadd === false)
      return (
        <div className="col">
          <div className="card border-primary mb-3">
            <div className="card-header">Thêm Mới </div>
            <div className="card-body text-primary">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên User"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Điện Thoại"
                />
              </div>
              <div className="form-group">
                <select className="custom-select" required>
                  <option value>Chọn Quyền mặc định</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Modelrator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className="btn btn-block btn-primary">Thêm Mới</div>
            </div>
          </div>
        </div>
      );
  };
  render() {
    return <div>{this.hienthiadd()}</div>;
  }
}

export default adduser;
