import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, getCategories } from "../actions";
import logo from "../assets/upayLogo.png";

const Create = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.upaymentsReducer.categories);

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
    if (
      value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
    ) {
      setAvatar(value);
      setAlert(null);
    } else {
      setAlert("Incorrect URL format");
    }
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
      createProduct({ name, description, avatar, category, price, developerEmail });
    } else {
      setAlert("Please fill all inputs correct format!!!");
    }
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className='text-center pageBody createContainer'>
      <main className='form-signin'>
        <div>
          <img className='mb-4 rounded-circle' src={logo} alt='logo' width='80' height='63' />
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
          <div className='form-floating createGroup'>
            <Dropdown className='createElement createCategory'>
              <Dropdown.Toggle
                variant='light'
                id='dropdown-basic'
                className='createCategory'
                style={{ fontSize: `16px` }}>
                {category || "Categories"}
              </Dropdown.Toggle>
              <Dropdown.Menu className='createCategory'>
                {categories.map(({ id, name }) => (
                  <Dropdown.Item key={id} onClick={() => handleCategory(name)} className='createElement'>
                    {name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
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
            <div className='alert alert-danger d-flex align-items-center' role='alert'>
              {alert}
            </div>
          )}
          <button className='w-100 btn btn-lg btn-primary' type='submit' onClick={() => handleProduct()}>
            Submit
          </button>
          <p className='mt-5 mb-3 text-muted'>&copy; 2022</p>
        </div>
      </main>
    </div>
  );
};

export default Create;