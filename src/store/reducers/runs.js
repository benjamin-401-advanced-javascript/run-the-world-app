export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RUNS':
      return action.payload;
    case 'ADD_RUNS':
      return [...state, action.payload];
    default:
      return state;
  }
};
