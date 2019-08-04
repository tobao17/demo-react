const editstatusInitialState = false;
const editstatus = (state = editstatusInitialState, action) => {
  switch (action.type) {
    case "CHANGE_EDIT_STATUS": {
      return !state;
    }
    default:
      return state;
  }
};
export default editstatus;
