import React, { useState } from 'react';

const ProductForm = ({ onSubmit }) => {
  const [productImage, setProductImage] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ productImage, productName, productDescription, productPrice });
    // Clearing the form fields after submission
    setProductImage('');
    setProductName('');
    setProductDescription('');
    setProductPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};

const ProductList = ({ products, onProductClick }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index} onClick={() => onProductClick(product)}>
          {product.productName}
        </li>
      ))}
    </ul>
  );
};

const AdminPage = () => {
  const [isCreateProduct, setIsCreateProduct] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFormSubmit = (productData) => {
    setProducts([...products, productData]);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h2>Admin Panel</h2>
        <div>
          <label>
            <input
              type="radio"
              value="create"
              checked={isCreateProduct}
              onChange={() => setIsCreateProduct(true)}
            />
            Create Product
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="edit"
              checked={!isCreateProduct}
              onChange={() => setIsCreateProduct(false)}
            />
            Edit Product
          </label>
        </div>
      </div>
      <div style={{ flex: 2 }}>
        {isCreateProduct ? (
          <ProductForm onSubmit={handleFormSubmit} />
        ) : (
          <ProductList products={products} onProductClick={handleProductClick} />
        )}
        {selectedProduct && (
          <div>
            <h3>Edit Product</h3>
            <ProductForm onSubmit={() => {}} {...selectedProduct} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
