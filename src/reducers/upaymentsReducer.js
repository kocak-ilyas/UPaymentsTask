import * as actionTypes from "../private/constants";
const initState = {
  products: [],
  categories: [],
  isCreateModal: false,
  postResponse: null,
};

export const upaymentsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return { ...state, categories: action.categories };

    case actionTypes.CLEAR_PRODUCTS:
      return initState;

    case actionTypes.GET_PRODUCTS:
      return { ...state, products: action.products };

    case actionTypes.IS_CREATE_MODAL:
      return { ...state, isCreateModal: action.isCreateModal };

    case actionTypes.CLEAR_CREATE_RESPONSE:
      return { ...state, postResponse: null };

    case actionTypes.CREATE_PRODUCTS:
      return { ...state, postResponse: action.postResponse };

    default:
      return state;
  }
};
