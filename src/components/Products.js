import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearProducts, getCategories, getProducts, setSelectedProduct, showProductModal } from "../actions";

import { Card, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

const Products = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.upaymentsReducer.categories);
  const products = useSelector((state) => state.upaymentsReducer.products);

  const [tempProducts, setTempProducts] = useState([]);
  const handleShowProduct = async (id) => {
    await dispatch(setSelectedProduct(id));
    await dispatch(showProductModal(true));
  };

  const [category, setCategory] = useState(null);
  const handleCategory = ({ name }) => {
    setCategory(name);
  };

  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    return () => {
      clearProducts();
    };
  }, [dispatch]);

  useEffect(() => {
    let filteredArray = products || [];
    if (category) {
      filteredArray = filteredArray.filter((product) => product.category === category);
    }
    if (searchValue !== "") {
      filteredArray = filteredArray.filter((product) => product?.name?.includes(searchValue));
    }
    setTempProducts(filteredArray);
  }, [products, category, searchValue]);

  return (
    <div style={{ margin: `10px 60px` }}>
      <Navbar bg='light' expand='lg' className='shadow pl-3 pr-3 mb-5 bg-body rounded'>
        <Container fluid>
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: "100px" }} navbarScroll>
              <NavDropdown title={category || "All Categories"} id='navbarScrollingDropdown'>
                <NavDropdown.Item key={0} onClick={() => handleCategory({ name: null })}>
                  All
                </NavDropdown.Item>
                {categories.map(({ id, name }) => (
                  <NavDropdown.Item key={id} onClick={() => handleCategory({ name })}>
                    {name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
                onChange={(e) => handleSearch(e.target.value)}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row xs={2} md={3} lg={3} xxl={4} className='g-4'>
        {tempProducts.map((product, index) => (
          <Col key={index} style={{ cursor: `pointer` }} onClick={() => handleShowProduct(product.id)}>
            <Card style={{ paddingTop: `20px` }}>
              <Card.Img
                variant='top'
                src={product.avatar}
                style={{ width: "12rem", height: "12rem", margin: "auto" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}$</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
