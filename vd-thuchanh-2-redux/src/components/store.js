import { stat } from "fs";
import numreducer from "./reducer/numreducer";
import editstatus from "./reducer/editstatusreducer";

var redux = require("redux");

const allreducer = redux.combineReducers({
  num: numreducer,
  editstatus: editstatus
});
var store1 = redux.createStore(allreducer);
store1.subscribe(() => {
  console.log(JSON.stringify(store1.getState()));
});
store1.dispatch({ type: "CHANGE_EDIT_STATUS" });
store1.dispatch({ type: "addnew", newitem: "tai nghe" });

store1.dispatch({ type: "delete", index: 0 });

export default store1;
