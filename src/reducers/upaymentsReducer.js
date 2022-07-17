import * as actionTypes from "../private/constants";
const initState = {
  products: [],
  categories: [],
};

export const upaymentsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_PRODUCTS:
      return initState;

    case actionTypes.GET_PRODUCTS:
      return { ...state, products: action.products };

    case actionTypes.GET_CATEGORIES:
      return { ...state, categories: action.categories };

    default:
      return state;
  }
};
