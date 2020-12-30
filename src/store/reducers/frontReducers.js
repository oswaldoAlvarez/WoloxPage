const initialState = {
    techInfo: {},
  };
  
  export default function (state, action) {
    switch (action.type) {
      case "SET_TECH_INFO":
        return { ...state, techInfo: action.payload };
      default:
        return { ...state };
    }
  }