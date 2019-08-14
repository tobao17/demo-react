import React, { Component } from "react";
import Headtitle from "./components/Headtitle";
import Product_item from "./components/Product_item";
import Adddata from "./components/add";
import axios from "axios";
const product_data = () => {
  return axios.get("/getdata01").then(res => res.data);
};
const addproductaction = (product_name, product_price, product_image) => {
  return axios
    .post("/add", {
      product_name,
      product_price,
      product_image
    })
    .then(Res => Res.data);
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  laydulieu = (a, b, c) => {
    console.log(a, b, c);
    var data2 = ([] = this.state.data);
    var item = {};
    item.product_name = a;
    item.product_price = b;
    item.product_image = c;
    data2.push(item);
    addproductaction(a, b, c).then(resp => {
      console.log(resp);
    });
    this.setState({
      data: data2
    });
  };
  handerclick = (name, price, image) => {
    // this.setState(
    //   (this.state.product_name = name),
    //   (this.state.product_price = price),
    //   (this.state.product_image = image)
    // );
  };
  componentWillMount() {
    if (this.state.data === null) {
      product_data().then(dulieu => {
        this.setState({
          data: dulieu
        });
      });
    }
  }
  printdata = () => {
    if (this.state.data !== null) {
      return this.state.data.map((value, key) => {
        return (
          <Product_item
            key={key}
            product_name={value.product_name}
            product_price={value.product_price}
            image={value.image}
          />
        );
      });
    }
  };
  render() {
    // axios
    //   .get("http://localhost:4000/getdata01")
    //   .then(function(response) {
    //     // handle success.d
    //   })
    //   .catch(function(error) {
    //     // handle error
    //   })
    //   .finally(function() {
    //     // always executed
    //   });
    console.log(this.state.data);

    return (
      <div>
        <Headtitle />
        <div className="container">
          <Adddata laydulieu={(a, b, c) => this.laydulieu(a, b, c)} />
          <div className="row">{this.printdata()}</div>
        </div>
      </div>
    );
  }
}
