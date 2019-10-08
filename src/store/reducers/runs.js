export default (state = [], { type, payload }) => {
  switch (type) {
    case 'FETCH_RUNS':
      return payload;
    case 'ADD_RUNS':
      return [...state, payload];
    case 'DELETE_RUNS':
      return state.filter((run) => run._id !== payload);
    default:
      return state;
  }
};
