import * as actionTypes from "../private/constants";
// import { fetchApiGraphic } from "../api/AdminApi";
import axios from "axios";

export const clearProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.CLEAR_PRODUCTS });
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    await axios.get(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/`).then((response) => {
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        products: response.data,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    await axios.get(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/`).then((response) => {
      dispatch({
        type: actionTypes.GET_CATEGORIES,
        categories: response.data,
      });
    });
  } catch (error) {
    console.log(error);
  }
};
export const createProduct = async (data) => {
  await axios
    .post("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products", data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
    .then((res) => console.log(`xxxres ==>`, res));
};
