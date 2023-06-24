const initialState = [];
const AddDeleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      const filteredState = state.filter((item, idx) => action.payload !== idx);
      return filteredState;
    default:
      return state;
  }
};

export default AddDeleteReducer;
