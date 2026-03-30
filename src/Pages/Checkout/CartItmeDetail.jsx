import { formatMoney } from "../../util/money";
import axios from "axios";
import { useState } from "react";
import { DeliveryOptions } from "./DeliveryOptions";
export function CartItmeDetail({ cartItem, deliveryOptions, LoadData }) {
  const [isUpQu, setIsUpQu] = useState(false);
  const [update, setUpdate] = useState(cartItem.quantity);
  const deleteCart = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await LoadData();
  };

  const upQuan = async () => {
    // Switch between true and false for isUpdatingQuantity.
    if (isUpQu) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(update),
      });
       setIsUpQu(false);
      await LoadData();
    } else {
      setIsUpQu(true);
    }
  };
  const handleUpdate = (event) => {
    setUpdate(event.target.value);
  };

  const handlekeyDownChange = (event) =>{
    const keyDown = event.key

    if(keyDown === "Enter"){
        upQuan()
    }
    else if(keyDown === "Escape"){
        setUpdate(cartItem.quantity)
        setIsUpQu(false)
    }
}
return(
    <div className="cart-item-details-grid">
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            {isUpQu  ? (
              <input
                type="text"
                className="inputBox"
                value={update}
                onChange={handleUpdate}
                onKeyDown={handlekeyDownChange}
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onChange={() =>{}}
            onClick={upQuan}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCart}
          >
            Delete
          </span>
        </div>
      </div>

      <DeliveryOptions
        cartItem={cartItem}
        deliveryOptions={deliveryOptions}
        LoadData={LoadData}
      />
    </div>
  )
  

}