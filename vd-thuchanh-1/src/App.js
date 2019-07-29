import React, { Component } from "react";
import Header from "./components/header.js";
import Search from "./components/search.js";
import Table from "./components/table.js";
import Adduser from "./components/adduser.js";
import Datauser from "./components/data.json";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: true,
      data: Datauser
    };
  }

  chuyentrangthai = () => {
    this.setState({ trangthai: !this.state.trangthai });
  };

  render() {
    return (
      <div className="jumbotron text-center">
        <Header />
        <div className="nhapdulieu">
          <div className="container " />
          <div className="row">
            <Search
              ketnoi={() => this.chuyentrangthai()}
              hienthiform={this.state.trangthai}
            />
            <Table datauser={this.state.data} />
            <Adduser hienthiadd={this.state.trangthai} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
