import React from "react";
// import { Link, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Create from "./components/Create";
// import Home from "./components/Home";

// import { Container, Navbar } from "react-bootstrap";
import { Container, Navbar } from "react-bootstrap";
import { FcPlus } from "react-icons/fc";
import "./App.css";
import { showCreateModal } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const isCreateModal = useSelector((state) => state.upaymentsReducer.isCreateModal);

  const handleShowCreateModal = () => {
    dispatch(showCreateModal(true));
  };
  return (
    <div className='App'>
      <div className='navbarContainer shadow pl-3 pr-3 mb-5 bg-body rounded'>
        <Navbar>
          <Container>
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
    </div>
  );
}

export default App;

/* <div>
  <ul>
    <li key='Home'>
      <Link to='/'>Home</Link>
    </li>
    <li key='Products'>
      <Link to='/products'>Products</Link>
    </li>
    <li key='Create'>
      <Link to='/create'>Create</Link>
    </li>
  </ul>
</div>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/products' element={<Products />} />
  <Route path='/create' element={<Create />} />
</Routes>  */
