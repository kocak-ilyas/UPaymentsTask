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
      console.log(response);
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        products: response.data,
      });
    });
  } catch (error) {
    console.log(error);
  }
};
// export const getProducts = (data) => async (dispatch) => {
//   try {
//     await dispatch({
//       type: actionTypes.CLEAR_GRAPHIC,
//     });
//     await fetchApiGraphic(data).then((response) => {
//       dispatch({
//         type: actionTypes.FETCH_GRAPHIC,
//         graphic: response.data.graphic,
//       });
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
