const reducer = (state, action) => {
    if (action.type === "HOME_UPDATE") {
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
        para: action.payload.para
      };
    }
  
    if (action.type === "ABOUT_UPDATE") {
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
        para: action.payload.para
      };
    }
  
    if (action.type === "GET_SERVICES") {
      return {
        ...state,
        Product: action.payload,
      };
    }
  
    return state;
  };
  
  export default reducer;

