import React, { useState } from 'react';

const ProductForm = () => {
  const [productImage, setProductImage] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform any action you want with the collected data
    // For example, sending it to a server
    console.log('Product Image:', productImage);
    console.log('Product Name:', productName);
    console.log('Product Description:', productDescription);
    console.log('Product Price:', productPrice);
    // Clearing the form fields after submission
    setProductImage('');
    setProductName('');
    setProductDescription('');
    setProductPrice('');
  };

  return (
    <>
    <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-4">
            <ul className="list-group">
              <li className="list-group-item">Create Product</li>
              <li className="list-group-item">Edit Product</li>
            </ul>
          </div>
          <div className="col"><form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="productImage">Product Image:</label>
        <input
          type="text"
          id="productImage"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productDescription">Product Description:</label>
        <textarea
          id="productDescription"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form></div>
        </div>
      </div>
    
    
    </>
  );
};

export default ProductForm;
