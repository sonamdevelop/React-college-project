import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProduct } from "../../redux/action";
const ProductForm = ({ onSubmit }) => {
  const [productImage, setProductImage] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ productImage, productName, productDescription, productPrice });
    dispatch(
      AddProduct({
        productImage,
        productName,
        productDescription,
        productPrice,
      })
    );
    // Clearing the form fields after submission
    setProductImage("");
    setProductName("");
    setProductDescription("");
    setProductPrice("");
  };

  return (
    
          <div className="table-responsive">
            <form onSubmit={handleSubmit}>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">
                      <label htmlFor="productImage">Product Image:</label>
                    </th>
                    <td>
                      <input
                        type="text"
                        id="productImage"
                        value={productImage}
                        onChange={(e) => setProductImage(e.target.value)}
                      />
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <th scope="col">
                      <label htmlFor="productName">Product Name:</label>
                    </th>
                    <td>
                      <input
                        type="text"
                        id="productName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className="">
                    <th scope="col">
                      <label htmlFor="productDescription">
                        Product Description:
                      </label>
                    </th>
                    <td>
                      {" "}
                      <textarea
                        id="productDescription"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                      ></textarea>
                    </td>
                  </tr>
                  <tr className="">
                    <th scope="col">
                      <label htmlFor="productPrice">Product Price:</label>
                    </th>
                    <td>
                      <input
                        type="number"
                        id="productPrice"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <button type="submit">Submit</button>
            </form>
          </div>
        
  );
};

const ProductList = ({ products, onProductClick }) => {
  return (
    <>
      {products.map((product, index) => (
        <div key={index} onClick={() => onProductClick(product)}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={product.productImage}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-text">
              {product.productDescription}
              </p>
              {product.productPrice}
              
            </div>
          </div>

          
        </div>
      ))}
    </>
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
    <div className="container">
      <h2>Admin Panel</h2>
      <div className="row">
        <div className="col"></div>
        <div className="col-10">
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
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
                <ProductList
                  products={products}
                  onProductClick={handleProductClick}
                />
              )}
              {selectedProduct && (
                <div>
                  <h3>Edit Product</h3>
                  <ProductForm onSubmit={() => {}} {...selectedProduct} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default AdminPage;
