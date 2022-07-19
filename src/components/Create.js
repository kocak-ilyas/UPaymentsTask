import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, showCreateModal, createProduct, getProducts } from "../actions";
import { Button, Dropdown, Modal, Table } from "react-bootstrap";
import logo from "../assets/upayLogo.png";

const Create = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.upaymentsReducer.categories);
  const postResponse = useSelector((state) => state.upaymentsReducer.postResponse);

  const [name, setName] = useState(null);
  const handleProductName = (value) => {
    setName(value);
  };

  const [description, setDescription] = useState(null);
  const handleDescription = (value) => {
    setDescription(value);
  };

  const [avatar, setAvatar] = useState(null);
  const handleUrl = (value) => {
    setAvatar(value);
  };

  const [category, setCategory] = useState(null);
  const handleCategory = (value) => {
    setCategory(value);
  };

  const [price, setPrice] = useState(null);
  const handlePrice = (value) => {
    setPrice(value);
  };

  const [developerEmail, setDeveloperEmail] = useState(null);
  const handleEmail = (value) => {
    /* eslint-disable */
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      setDeveloperEmail(value);
      setAlert(null);
    } else {
      setAlert("Incorrect Mail format");
    }
  };

  const [alert, setAlert] = useState(null);

  const handleProduct = () => {
    if (!alert && name && description && avatar && category && price && developerEmail) {
      dispatch(createProduct({ name, description, avatar, category, price, developerEmail }));
    } else {
      setAlert("Please fill all inputs correct format!!!");
    }
  };

  const handleShowCreateModal = () => {
    dispatch(showCreateModal(false));
    dispatch(getProducts());
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Modal show={true} onHide={handleShowCreateModal} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <img className='rounded-circle' src={logo} alt='logo' width='40' height='38' style={{ marginRight: `20px` }} />{" "}
        <Modal.Title>UPayments</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='text-center pageBody createContainer'>
          {!postResponse ? (
            <main className='form-signin'>
              <div>
                <h1 className='h3 mb-3 fw-normal'>Create Product</h1>
                <div className='form-floating createGroup'>
                  <input
                    type='text'
                    className='form-control'
                    id='formProductName'
                    placeholder={name || "Product Name"}
                    onChange={(e) => handleProductName(e.target.value)}
                    required
                  />
                  <label htmlFor='formProductName'>Product Name</label>
                </div>
                <br />
                <div className='form-floating createGroup'>
                  <textarea
                    style={{ minHeight: `90px` }}
                    rows={3}
                    className='form-control'
                    id='formDescription'
                    placeholder={description || "Description"}
                    onChange={(e) => handleDescription(e.target.value)}
                    required
                  />
                  <label htmlFor='formDescription'>Description</label>
                </div>
                <br />
                <div className='form-floating createGroup'>
                  <input
                    type='url'
                    className='form-control'
                    id='formImageUrl'
                    placeholder={avatar || "Image URL"}
                    onChange={(e) => handleUrl(e.target.value)}
                    required
                  />
                  <label htmlFor='formImageUrl'>Image URL</label>
                </div>
                <br />
                <div className='form-floating createGroup'>
                  <Dropdown className='createElement createCategory'>
                    <Dropdown.Toggle
                      variant='secondary'
                      id='dropdown-basic'
                      className='createCategory'
                      style={{ fontSize: `16px`, width: "459px" }}>
                      {category || "Categories"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className='createCategory shadow pl-3 pr-3 mb-5 bg-body rounded'
                      style={{ width: "459px" }}>
                      {categories.map(({ id, name }) => (
                        <Dropdown.Item key={id} onClick={() => handleCategory(name)} className='createElement'>
                          {name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <br />
                <div className='form-floating createGroup'>
                  <input
                    type='number'
                    className='form-control'
                    id='formPrice'
                    placeholder={price || "Price"}
                    onChange={(e) => handlePrice(e.target.value)}
                    required
                  />
                  <label htmlFor='formPrice'>Price</label>
                </div>
                <br />
                <div className='form-floating createGroup'>
                  <input
                    type='developerEmail'
                    pattern='.+@globex\.com'
                    className='form-control'
                    id='formEmail'
                    placeholder={developerEmail || "E-mail"}
                    onChange={(e) => handleEmail(e.target.value)}
                    required
                  />
                  <label htmlFor='formEmail'>E-mail</label>
                </div>
                {alert && (
                  <div
                    className='alert alert-danger d-flex align-items-center'
                    role='alert'
                    style={{ height: "26px", fontSize: "13px" }}>
                    {alert}
                  </div>
                )}
              </div>
            </main>
          ) : postResponse.status === 201 ? (
            <div>
              <h4 className='h3 mb-3 mt-5 fw-normal'>Product Created</h4>
              <Table striped hover size='sm' style={{ textAlign: `left` }}>
                <tbody>
                  <tr>
                    <td>
                      <strong>Product Name</strong>
                    </td>
                    <td>{postResponse.data.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Description</strong>
                    </td>
                    <td>{postResponse.data.description}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Image URL</strong>
                    </td>
                    <td>{postResponse.data.avatar}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Category</strong>
                    </td>
                    <td>{postResponse.data.category}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Price</strong>
                    </td>
                    <td>{postResponse.data.price}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>E-mail</strong>
                    </td>
                    <td>{postResponse.data.developerEmail}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ) : (
            <div className='alert alert-danger d-flex align-items-center' role='alert'>
              Can not created this product!!!
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => handleShowCreateModal()}>
          Close
        </Button>
        {!postResponse && (
          <Button variant='primary' onClick={() => handleProduct()}>
            Submit
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default Create;
