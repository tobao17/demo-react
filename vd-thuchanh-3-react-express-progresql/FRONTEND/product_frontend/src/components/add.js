import React, { Component } from "react";
import axios from "axios";

export default class add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      product_price: "",
      product_image: ""
    };
  }
  ischange = event => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  // handerclick = () => {
  //   addproductaction(
  //     this.state.product_name,
  //     this.state.product_price,
  //     this.state.product_image
  //   ).then(resp => {
  //     console.log(resp);
  //   });
  // };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto">
            <form action="">
              <div className="form-group">
                <label htmlFor="product_name">Tên sản phẩm </label>
                <input
                  type="text"
                  name="product_name"
                  id="product_name"
                  className="form-control"
                  placeholder="nhập tên sản phẩm "
                  aria-describedby="nametext"
                  onChange={event => {
                    this.ischange(event);
                  }}
                />
                <small id="nametext" className="text-muted">
                  lorem mm
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="product_price">Giá sản phẩm </label>
                <input
                  type="text"
                  name="product_price"
                  id="product_name"
                  className="form-control"
                  placeholder="nhập tên sản phẩm "
                  aria-describedby="nametext"
                  onChange={event => {
                    this.ischange(event);
                  }}
                />
                <small id="nametext" className="text-muted" />
              </div>
              <div className="form-group">
                <label htmlFor="image">Đường link ảnh</label>
                <input
                  type="text"
                  name="product_image"
                  id="product_name"
                  className="form-control"
                  placeholder="nhập tên sản phẩm "
                  aria-describedby="nametext"
                  onChange={event => {
                    this.ischange(event);
                  }}
                />
                <small id="nametext" className="text-muted" />
              </div>
              <button
                type="reset"
                className="btn btn-primary"
                onClick={(a, b, c) =>
                  this.props.laydulieu(
                    this.state.product_name,
                    this.state.product_price,
                    this.state.product_image
                  )
                }
              >
                Thêm mới
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
