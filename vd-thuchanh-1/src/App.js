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
      data: Datauser,
      searchtext: ""
    };
  }
  laydulieutubangthem = item => {
    var them = {};
    them.id = item.id;
    them.name = item.name;
    them.tel = item.tel;
    them.permission = item.permission;
    var items = this.state.data;
    items.push(them);
    this.setState({
      data: items
    });
  };
  checktimkiem = temvalue => {
    this.setState({
      searchtext: temvalue
    });
  };
  chuyentrangthai = () => {
    this.setState({ trangthai: !this.state.trangthai });
  };

  render() {
    var ketqua = [];
    this.state.data.forEach(item => {
      if (item.name.indexOf(this.state.searchtext) !== -1) ketqua.push(item);
    });

    return (
      <div className="jumbotron text-center">
        <Header />
        <div className="nhapdulieu">
          <div className="container " />
          <div className="row">
            <Search
              ketnoi={() => this.chuyentrangthai()}
              hienthiform={this.state.trangthai}
              check={temvalue => this.checktimkiem(temvalue)}
            />
            <Table datauser={ketqua} />
            <Adduser
              hienthiadd={this.state.trangthai}
              add={item => this.laydulieutubangthem(item)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
