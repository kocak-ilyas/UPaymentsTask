import * as actionTypes from "../private/constants";
import axios from "axios";
const apiUrlHeader = `https://62286b649fd6174ca82321f1.mockapi.io/case-study/`;

export const getCategories = () => async (dispatch) => {
  try {
    await axios.get(apiUrlHeader + `categories/`).then((response) => {
      dispatch({ type: actionTypes.GET_CATEGORIES, categories: response.data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const clearProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.CLEAR_PRODUCTS });
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    await axios.get(apiUrlHeader + `products/`).then((response) => {
      dispatch({ type: actionTypes.GET_PRODUCTS, products: response.data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const showCreateModal = (value) => async (dispatch) => {
  try {
    await dispatch({ type: actionTypes.CLEAR_CREATE_RESPONSE });
    await dispatch({ type: actionTypes.IS_CREATE_MODAL, isCreateModal: value });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = (data) => async (dispatch) => {
  try {
    await axios
      .post(apiUrlHeader + `products`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((response) => {
        dispatch({ type: actionTypes.CREATE_PRODUCTS, postResponse: response });
      });
  } catch (error) {
    console.log(error);
  }
};

export const showProductModal = (value) => async (dispatch) => {
  try {
    await dispatch({ type: actionTypes.IS_PRODUCT_MODAL, isProductModal: value });
    !value && (await dispatch({ type: actionTypes.CLEAR_SELECTED_PRODUCT }));
  } catch (error) {
    console.log(error);
  }
};

export const setSelectedProduct = (id) => async (dispatch) => {
  try {
    await axios.get(apiUrlHeader + `products/${id}`).then((response) => {
      dispatch({ type: actionTypes.SET_SELECTED_PRODUCT, selectedProductDetails: response.data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(apiUrlHeader + `products/${id}`).then((response) => {
      dispatch({ type: actionTypes.DELETE_PRODUCTS, deleteResponse: response });
    });
  } catch (error) {
    console.log(error);
  }
};
