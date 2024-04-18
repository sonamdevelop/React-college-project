// import React from "react";
// import Products from "./Products";
// export default function Home() {
//   return (
//     <>
//       <Products />
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import productdata from "../redux/reducer/Products.json";
import Cookies from 'js-cookie';

  

export default function Products() {

  
  const pdatas = JSON.stringify(productdata);
 

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

 
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      
      const response = productdata;
      Cookies.set('productdata', pdatas);
      // setCookieValue(pdatas);
      if (componentMounted) {
         console.log(Cookies.get('productdata'));
        // Cookies.remove('productdata');

    
        setData(response);
        setFilter(response);
        setLoading(false);
        // console.log(productdata);
        // console.log(typeof filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
      
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  
  const ShowProducts = () => {
    return (
      <>
      <script>console.log(filter);</script>
        {filter.map((producte) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={producte.id}>
                  <img
                    src={producte.image_url}
                    height="250px"
                    className="card-img-top"
                    alt={producte.product_name}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {producte.product_name}...
                    </h5>
                    <p className="card-text lead fw-bold">₹{producte.price}</p>
                    <NavLink
                      to={`/products/${producte.id}`}
                      className="btn  btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">ALL Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
    
  );
}

