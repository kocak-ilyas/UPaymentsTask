import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showProductModal, deleteProduct, getProducts } from "../actions";

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
    <Modal show={true} onHide={handleShowProductModal} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Product Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={selectedProductDetails.avatar} alt='' />
        <h1>category: {selectedProductDetails.category}</h1>
        <h1>createdAt: {selectedProductDetails.createdAt}</h1>
        <p>description: {selectedProductDetails.description}</p>
        <h1>developerEmail: {selectedProductDetails.developerEmail}</h1>
        <h1>id: {selectedProductDetails.id}</h1>
        <h1>name: {selectedProductDetails.name}</h1>
        <h1>price: {selectedProductDetails.price}</h1>
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
