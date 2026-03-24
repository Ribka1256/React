import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState, Fragment } from 'react';
import Header from '../../Componet/Header';
import './OrdersPage.css';
import { OrderTotal } from './OrderTotal';
import { OrderGrid } from './OrderGrid';

function Orders({ cart = [] }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrder = async () =>{
      const response =  await axios
      .get('/api/orders?expand=products')
        setOrders(response.data)
      .catch((error) => {
        console.error("Orders fetch error:", error);
      });}
      getOrder()
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
                 <OrderTotal order={order}/>
                </div>

                <div className="order-header-right-section">
                  <div className="order-header-label">Order ID:</div>
                  <div>{order.id}</div>
                </div>
              </div>

              <OrderGrid order={order}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Orders;