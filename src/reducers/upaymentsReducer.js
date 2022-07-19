import * as actionTypes from "./constants";
const initState = {
  products: [],
  categories: [],
  isCreateModal: false,
  postResponse: null,
  selectedProductDetails: null,
  isProductModal: false,
  deleteResponse: null,
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

    case actionTypes.IS_PRODUCT_MODAL:
      return { ...state, isProductModal: action.isProductModal };

    case actionTypes.CLEAR_SELECTED_PRODUCT:
      return { ...state, selectedProductDetails: null };

    case actionTypes.SET_SELECTED_PRODUCT:
      return { ...state, selectedProductDetails: action.selectedProductDetails };

    case actionTypes.DELETE_PRODUCTS:
      return { ...state, deleteResponse: action.deleteResponse };

    default:
      return state;
  }
};
