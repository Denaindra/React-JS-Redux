export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMNT":
      return state - 1;
    default:
      return state;
  }
};
