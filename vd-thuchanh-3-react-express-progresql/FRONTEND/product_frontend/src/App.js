import React, { Component } from "react";
import Headtitle from "./components/Headtitle";
import Product_item from "./components/Product_item";
import axios from "axios";
const product_data = () => {
  return axios.get("http://localhost:4000/getdata01").then(res => res.data);
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

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
          <div className="row">{this.printdata()}</div>
        </div>
      </div>
    );
  }
}
