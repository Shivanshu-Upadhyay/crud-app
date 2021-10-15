import * as types from "./actionTypes";

const initialState = {
  datas: [],
  data: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATAS:
      return {
        ...state,
        datas: action.payload,
      };

    case types.GET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
