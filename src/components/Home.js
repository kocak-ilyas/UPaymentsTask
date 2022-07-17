import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearProducts, getProducts } from "../actions";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.upaymentsReducer.products);

  useEffect(() => {
    dispatch(getProducts());

    return () => {
      clearProducts();
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <img src={product.avatar} alt='avatar' />
            <h3>{product.name}</h3>
            <h3>{product.price}$</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

// const companies = useSelector((state) => state.companiesReducer.companies);
// const graphic = useSelector((state) => state.graphicReducer.graphic);

// useEffect(() => {
//   dispatch(getCompanies());
// }, [dispatch]);
// useEffect(() => {
//   setIsTickerDropdown(false);
//   dispatch(
//     getGraphic({
//       showPrePost,
//       selectedTable,
//       selectedTicker,
//       selectedStartDate,
//       selectedEndDate,
//     })
//   );
// }, [dispatch, showPrePost, selectedTable, selectedTicker, selectedStartDate, selectedEndDate]);
