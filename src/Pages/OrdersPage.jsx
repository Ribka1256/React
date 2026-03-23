import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState, Fragment } from 'react';
import Header from '../Componet/Header';
import './OrdersPage.css';
import { formatMoney } from '../util/money';

function Orders({ cart = [] }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('/api/orders?expand=products')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Orders fetch error:", error);
      });
  }, []);

  return (
    <>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => (
            <div key={order.id} className="order-container">
              <div className="order-header">
                <div className="order-header-left-section">
                  <div className="order-date">
                    <div className="order-header-label">Order Placed:</div>
                    <div>{dayjs(order.orderTimeMs).format('MMMM D')}</div>
                  </div>
                  <div className="order-total">
                    <div className="order-header-label">Total:</div>
                    <div>{formatMoney(order.totalCostCents)}</div>
                  </div>
                </div>

                <div className="order-header-right-section">
                  <div className="order-header-label">Order ID:</div>
                  <div>{order.id}</div>
                </div>
              </div>

              <div className="order-details-grid">
                {order.products.map((orderProduct, index) => {
                  // If 'product' object is missing from backend, show a fallback
                  const productName = orderProduct.product?.name || "Loading product name...";
                  const productImage = orderProduct.product?.image || "images/icons/placeholder.png";

                  return (
                    <Fragment key={orderProduct.productId || index}>
                      <div className="product-image-container">
                        <img src={productImage} alt={productName} />
                      </div>

                      <div className="product-details">
                        <div className="product-name">{productName}</div>
                        <div className="product-delivery-date">
                          Arriving: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
                        </div>
                        <div className="product-quantity">
                          Quantity: {orderProduct.quantity}
                        </div>
                        <button className="buy-again-button button-primary">
                          <img className="buy-again-icon" src="images/icons/buy-again.png" alt="buy again" />
                          <span className="buy-again-message">Add to Cart</span>
                        </button>
                      </div>

                      <div className="product-actions">
                        <a href="/tracking">
                          <button className="track-package-button button-secondary">
                            Track package
                          </button>
                        </a>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Orders;