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
      searchtext: "",
      isedit: false,
      dulieuhienthinutsua: {}
    };
  }

  componentWillMount() {
    if (localStorage.getItem("userdata") === null) {
      localStorage.setItem("userdata", JSON.stringify(Datauser));
    } else {
      var temp = JSON.parse(localStorage.getItem("userdata"));
      this.setState({
        data: temp
      });
    }
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
    localStorage.setItem("userdata", JSON.stringify(items));
  };
  checktimkiem = temvalue => {
    this.setState({
      searchtext: temvalue
    });
  };
  chuyentrangthai = () => {
    this.setState({ trangthai: !this.state.trangthai });
  };
  hienthinutdong = () => {
    this.setState({
      isedit: !this.state.isedit
    });
  };
  hienthinutsuavalaydulieu = dulieu => {
    this.setState({
      isedit: !this.state.isedit,
      dulieuhienthinutsua: dulieu
    });
  };
  // tai sao khong thay doi gia tri trong state duoc ma dung foreach lai duoc ...
  laythongtintubangsua = info => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    });
  };
  deletefunction = id => {
    var temdata = this.state.data;
    temdata = temdata.filter(item => item.id != id);
    this.setState({
      data: temdata
    });
    localStorage.setItem("userdata", JSON.stringify(temdata));
  };
  render() {
    var ketqua = [];
    this.state.data.forEach(item => {
      if (item.name.indexOf(this.state.searchtext) !== -1) ketqua.push(item);
    });

    return (
      <div className="jumbotron text-center">
        <div className="nhapdulieu">
          <div className="container ">
            <Header />
            <div className="row">
              <Search
                ketnoi={() => this.chuyentrangthai()}
                hienthiform={this.state.trangthai}
                check={temvalue => this.checktimkiem(temvalue)}
                isedit={this.state.isedit}
                hienthinutsua={() => this.hienthinutdong()}
                dulieuhienthinutsua={this.state.dulieuhienthinutsua}
                hienthinutsuavalaydulieu={() => this.hienthinutsuavalaydulieu()}
                laythongtintubangsua={info => this.laythongtintubangsua(info)}
              />
              <Table
                datauser={ketqua}
                hienthinutsuavalaydulieu={dulieu =>
                  this.hienthinutsuavalaydulieu(dulieu)
                }
                deletefunction={id => this.deletefunction(id)}
              />
              <Adduser
                hienthiadd={this.state.trangthai}
                add={item => this.laydulieutubangthem(item)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
