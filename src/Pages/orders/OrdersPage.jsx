import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../Componet/Header';
import './OrdersPage.css';
import { OrderGrid } from './OrderGrid';

function Orders({ cart, LoadData }) {
  const [orders, setOrders] = useState([]);

useEffect(() => {
  const getOrder = async () => {
    try {
      const response = await axios.get('/api/orders?expand=products');
      setOrders(response.data);
    } catch (error) {
      console.error("Orders fetch error:", error);
    }
  };

  getOrder();
}, []);

  return (
    <>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

       <OrderGrid orders={orders} LoadData = {LoadData}/>
      </div>
    </>
  );
}

export default Orders;