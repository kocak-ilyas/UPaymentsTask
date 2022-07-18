import { Container, Navbar } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  return (
    <div className='App'>
      <div className='navbarContainer shadow pl-3 pr-3 mb-5 bg-body rounded'>
        <Navbar>
          <Container>
            <Navbar.Brand href='/'>UPayments Store</Navbar.Brand>
            <Navbar.Collapse className='justify-content-end'>
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
    </div>
  );
}

export default App;

{
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
}
