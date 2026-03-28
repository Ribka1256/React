import dayjs from 'dayjs';
import axios from 'axios';
import { formatMoney } from '../../util/money';
import { DeliveryOptions } from './DeliveryOptions';

export function OrderSummary({ cart, deliveryOptions , LoadData}) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 && cart.map((cartItem) => {
        const selectedDeliveryOption = deliveryOptions
          .find((deliveryOption) => {
            return deliveryOption.id === cartItem.deliveryOptionId;
          });
          const deleteCart = async() =>{
            await axios.delete(`/api/cart-items/${cartItem.productId}`)
            await LoadData()
          }
            const updateQuantity = async () =>{
              await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity: cartItem.quantity+1
              })
              await LoadData()
            }
        return (
          <div key={cartItem.productId} className="cart-item-container">
            <div className="delivery-date">
              Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
            </div>

            <div className="cart-item-details-grid">
              <img className="product-image"
                src={cartItem.product.image} />

              <div className="cart-item-details">
                <div className="product-name">
                  {cartItem.product.name}
                </div>
                <div className="product-price">
                  {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                  <span>
                    Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                  </span>
                  <span className="update-quantity-link link-primary" onClick={updateQuantity} >
                    Update
                  </span>
                  <span className="delete-quantity-link link-primary" onClick={deleteCart}>
                    Delete
                  </span>
                </div>
              </div>

              <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} LoadData={LoadData} />
            </div>
          </div>
        );
      })}
    </div>
  );
}