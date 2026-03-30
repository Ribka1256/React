import dayjs from 'dayjs';

import { CartItmeDetail } from './CartItmeDetail';

export function OrderSummary({ cart,deliveryOptions , LoadData})
 {

  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 && cart.map((cartItem) => {
        const selectedDeliveryOption = deliveryOptions
          .find((deliveryOption) => {
            return deliveryOption.id === cartItem.deliveryOptionId;
          });


        return (
          <div key={cartItem.productId} className="cart-item-container">
            <div className="delivery-date">
              Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
            </div>

          <CartItmeDetail cart={cart} cartItem={cartItem} deliveryOptions={deliveryOptions} LoadData={LoadData}/>
          </div>
        );
      })}
    </div>
  );
}