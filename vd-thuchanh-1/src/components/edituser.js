import React, { Component } from "react";

export class edituser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.dulieuhienthinutsua.id,
      name: this.props.dulieuhienthinutsua.name,
      tel: this.props.dulieuhienthinutsua.tel,
      permission: this.props.dulieuhienthinutsua.permission
    };
  }
  ischange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  hienthinutsuavalaydulieu = () => {
    this.props.hienthinutsua();
    var name = this.state.name;
    this.props.laythongtintubangsua(this.state);
  };
  render() {
    return (
      <div className="row">
        <div className="col">
          <form>
            <div className="card border-primary mb-3">
              <div className="card-header">Sửa nội dung vào thông tin </div>

              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    onChange={event => this.ischange(event)}
                    type="text"
                    className="form-control"
                    placeholder="Tên User"
                    name="name"
                    defaultValue={this.props.dulieuhienthinutsua.name}
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={event => this.ischange(event)}
                    type="text"
                    className="form-control"
                    placeholder="Điện Thoại"
                    name="tel"
                    defaultValue={this.props.dulieuhienthinutsua.tel}
                  />
                </div>
                <div className="form-group">
                  <select
                    onChange={event => this.ischange(event)}
                    className="custom-select"
                    name="permission"
                    defaultValue={this.props.dulieuhienthinutsua.permission}
                  >
                    <option value>Chọn Quyền mặc định</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Modelrator</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <input
                  type="reset"
                  className="btn btn-block btn-primary"
                  value="Lưu"
                  onClick={() => this.hienthinutsuavalaydulieu()}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default edituser;
