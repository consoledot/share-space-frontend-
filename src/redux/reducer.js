const INITIAL_STATE = {
  token: null,
  user: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "REMOVE_TOKEN":
      return {
        ...state,
        token: null,
        user: null,
      };
    case "ADD_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
