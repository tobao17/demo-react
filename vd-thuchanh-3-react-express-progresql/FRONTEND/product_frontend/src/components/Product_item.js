import React, { Component } from "react";

export default class Product_item extends Component {
  render() {
    return (
      <div className="col-sm-4 mt-3">
        <div className="card text-left">
          <img
            className="card-img-top img-fluid"
            src={this.props.image}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title ">{this.props.product_name}</h4>
            <p className="card-text float-right">{this.props.product_price}</p>
          </div>
        </div>
      </div>
    );
  }
}
