export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RUNS':
      return action.payload;
    case 'ADD_RUNS':
      return [...state, action.payload];
    case 'DELETE_RUNS':
      return state.filter((run) => run._id !== action.payload);
    default:
      return state;
  }
};
