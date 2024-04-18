import CartProduct from "./cart/CartProduct";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Checkout({ totalAmount, productCode }) {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const state = useSelector((state) => state.handleCart);
  let total = 0;

  const handlePurchase = () => {
    // Assuming here you would send this data to an API for processing
    // For this example, we'll just set the purchase details state
    const details = {
      deliveryAddress,
      customerId,
      totalAmount,
    };
    setPurchaseDetails(details);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col">
            <form>
              <div className="table-responsive">
                <h2>Checkout</h2>
                {state.map((x) => {
                  totalAmount = x.sub_total;
                })}
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Total Amount:</th>
                      <td>${parseFloat(totalAmount).toFixed(2)}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <th scope="row">Delivery Address:</th>
                      <td>
                        <textarea
                          name="text"
                          cols="60"
                          rows="5"
                          value={deliveryAddress}
                          onChange={(e) => setDeliveryAddress(e.target.value)}
                        ></textarea>
                      </td>
                    </tr>
                    <tr className="">
                      <th scope="row">Customer ID:</th>
                      <td>{Math.floor(Math.random() * (100 - 1 + 1)) + 1}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button type="button" onClick={handlePurchase}>
                Buy Now
              </button>
            </form>
            {purchaseDetails && (
              <div>
                <div className="table-responsive">
                  <h3>Purchase Slip</h3>
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Delivery Address:</th>
                        <td scope="row">{purchaseDetails.deliveryAddress}</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <th scope="col">Customer ID:</th>
                        <td>{purchaseDetails.customerId}</td>
                      </tr>
                      <tr className="">
                        <th scope="col">Total Amount:</th>
                        <td>${purchaseDetails.totalAmount}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}
