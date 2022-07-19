import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCreateModal } from "./actions";

import Products from "./components/Products";
import Product from "./components/Product";
import Create from "./components/Create";

import { Container, Navbar } from "react-bootstrap";
import { FcPlus } from "react-icons/fc";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const isCreateModal = useSelector((state) => state.upaymentsReducer.isCreateModal);
  const isProductModal = useSelector((state) => state.upaymentsReducer.isProductModal);

  const handleShowCreateModal = () => {
    dispatch(showCreateModal(true));
  };
  return (
    <div className='App'>
      <div className='navbarContainer shadow pl-3 pr-3 mb-5 bg-body rounded'>
        <Navbar>
          <Container fluid className='mx-5'>
            <Navbar.Brand href='/'>UPayments Store</Navbar.Brand>
            <Navbar.Collapse className='justify-content-end'>
              <Navbar.Text style={{ marginRight: `50px`, cursor: "pointer" }} onClick={() => handleShowCreateModal()}>
                <FcPlus size={25} />
                &nbsp;&nbsp;Add Product
              </Navbar.Text>
              <Navbar.Text>Register</Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Products />
      <div className='container'>
        <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
          <div className='col-md-4 d-flex align-items-center'>
            <span className='text-muted'>&copy; 2022 UPayments</span>
          </div>
        </footer>
      </div>
      {isCreateModal && <Create />}
      {isProductModal && <Product />}
    </div>
  );
}

export default App;
