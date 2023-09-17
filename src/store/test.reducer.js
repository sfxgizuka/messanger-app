const initialState = {
    // Define your initial state here
    // For example:
    data: [],
  };
  
  const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
      // Handle different action types here
      // For example:
      case 'UPDATE_DATA':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default exampleReducer;