import { formatMoney } from "../../util/money"
import { DeliveryOptions } from "./DeliveryOptions"
export function CartItemDetail({cartItem, deliveryOptions}){
    return(
          <div className="cart-item-details-grid">
                <img
                  className="product-image"
                  src={cartItem.product.image}
                />

                <div className="cart-item-details">
                  <div className="product-name">
                    {cartItem.product.name}
                  </div>

                  <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                  </div>

                  <div className="product-quantity">
                    Quantity:
                    <span className="quantity-label">
                      {cartItem.quantity}
                    </span>
                  </div>
                </div>

                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
        
                
                />
              </div>
    )
}