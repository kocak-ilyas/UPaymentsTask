import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Home from "./components/Home";
import Product from "./components/Product";

function App() {
  return (
    <div className='App'>
      <h1>UPayments</h1>
      <div>
        <ul>
          <li key='Home'>
            <Link to='/'>Home</Link>
          </li>
          <li key='Product'>
            <Link to='/product'>Product</Link>
          </li>
          <li key='Create'>
            <Link to='/create'>Create</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
