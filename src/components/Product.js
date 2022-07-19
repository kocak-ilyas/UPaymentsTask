import React from "react";
import { showProductModal, deleteProduct, getProducts } from "../actions";

import { Button, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();
  const selectedProductDetails = useSelector((state) => state.upaymentsReducer.selectedProductDetails);

  const handleDelete = async () => {
    await dispatch(showProductModal(false));
    await dispatch(deleteProduct(selectedProductDetails.id));
    await dispatch(getProducts());
  };

  const handleShowProductModal = () => {
    dispatch(showProductModal(false));
  };

  return (
    <Modal show={true} onHide={handleShowProductModal} backdrop='static' keyboard={false} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>Product Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={5}>
            <img
              src={selectedProductDetails.avatar}
              alt='avatar'
              style={{ objectFit: `cover`, width: "100%", height: "100%", borderRadius: "19px" }}
            />
          </Col>
          <Col xs={7}>
            <h1 style={{ margin: `15px auto 50px 0px`, display: "flex" }}>{selectedProductDetails.name}</h1>
            <span style={{ marginTop: `139px`, display: "flex", fontSize: "22px" }}>
              $&nbsp;{selectedProductDetails.price}
            </span>
          </Col>
        </Row>
        <hr />
        <h3 style={{ textAlign: "left" }}>Description</h3>
        <p style={{ textAlign: "justify" }}>{selectedProductDetails.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => handleShowProductModal()}>
          Close
        </Button>
        <Button variant='danger' onClick={() => handleDelete()}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Product;
