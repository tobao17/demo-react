const numInitialState = ["man hinh ", "chuot", "ban phim"];
const numreducer = (state = numInitialState, action) => {
  switch (action.type) {
    case "addnew": {
      return [...state, action.newitem];
    }
    case "delete": {
      return [state.filter((value, i) => i !== action.number)];
    }
    default:
      return state;
  }
};
export default numreducer;
