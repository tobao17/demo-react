import React, { Component } from "react";

export class adduser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      tel: "",
      permission: ""
    };
  }

  ischange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  hienthiadd = () => {
    if (this.props.hienthiadd === false)
      return (
        <div className="col">
          <form>
            <div className="card border-primary mb-3">
              <div className="card-header">Thêm Mới </div>

              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên User"
                    name="name"
                    onChange={event => {
                      this.ischange(event);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Điện Thoại"
                    name="tel"
                    onChange={event => {
                      this.ischange(event);
                    }}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="custom-select"
                    name="permission"
                    onChange={event => {
                      this.ischange(event);
                    }}
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
                  onClick={a => this.props.add(this.state)}
                  value=" Thêm Mới"
                />
              </div>
            </div>
          </form>
        </div>
      );
  };
  render() {
    return <div>{this.hienthiadd()}</div>;
  }
}

export default adduser;
