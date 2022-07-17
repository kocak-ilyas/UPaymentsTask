import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearProducts, getProducts, getCategories } from "../actions";

import Dropdown from "react-bootstrap/Dropdown";
import "./style.scss";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.upaymentsReducer.products);
  const categories = useSelector((state) => state.upaymentsReducer.categories);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
    return () => {
      clearProducts();
    };
  }, [dispatch]);

  const [category, setCategory] = useState(null);
  const handleCategory = ({ name }) => {
    setCategory(name);
  };
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            {category || "All Categories Selected"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href='#/action-1' key={0} onClick={() => handleCategory({ name: null })}>
              All
            </Dropdown.Item>
            {categories.map(({ id, name }) => (
              <Dropdown.Item href='#/action-1' key={id} onClick={() => handleCategory({ name })}>
                {name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <ul>
        {products.map((product, index) =>
          category === null ? (
            <li key={index}>
              <img src={product.avatar} alt='avatar' />
              <h3>{product.name}</h3>
              <h3>{product.price}$</h3>
            </li>
          ) : (
            category === product.category && (
              <li key={index}>
                <img src={product.avatar} alt='avatar' />
                <h3>{product.name}</h3>
                <h3>{product.price}$</h3>
              </li>
            )
          )
        )}
      </ul>
    </div>
  );
};

export default Home;
