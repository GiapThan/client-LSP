// reducer
const initValue = { value: 0 };

const rootReducer = (state = initValue, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
      };
    case "todoList/increment":
      return {
        ...state,
        value: state.value + action.payload,
      };
    default:
      return state;
  }
};

// action is object
const INCREMENT = {
  type: "todoList/increment",
  payload: 10,
};

// action creators
const incrementCreator = (payload) => {
  return {
    type: "todoList/increment",
    payload,
  };
};

// dispatch is function
dispatch(incrementCreator(10));
