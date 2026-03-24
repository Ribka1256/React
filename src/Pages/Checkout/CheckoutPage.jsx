import axios from "axios";
import { useEffect,useState } from "react";
import CheckoutHeader from "./CheckoutHeader";
import "./CheckoutPage.css";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

function CheckoutPage({cart = []}) {
const [deliveryOptions, setDeliveryOptions] = useState([])
const [payment, setPayment] = useState(null)
useEffect(() => {
  axios
    .get('/api/delivery-options?expand=estimatedDeliveryTime')
    .then((response) => {
      setDeliveryOptions(response.data);
    })
    .catch(console.error);

    axios.get('/api/payment-summary')
    .then((response) =>{
      setPayment(response.data)
    })
}, 
[]);

  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
      <OrderSummary cart={cart} deliveryOptions={deliveryOptions}/>
          <PaymentSummary payment={payment}/>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
