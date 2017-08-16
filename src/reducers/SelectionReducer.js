import {SELECT_LIBRARY_ACTION} from "../actions/index";

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_LIBRARY_ACTION:
      return action.selectedLibraryId;
    default:
      return state;
  }
};