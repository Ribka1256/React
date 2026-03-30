 import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { Fragment } from "react";

export function OrderDetail({order, LoadData}) {


  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct, index) => {
       
  const addtoCart = async () => {
    await axios.put('/api/cart-items', {
       productId: orderProduct.product.id,
      quantity: 1
    });
    await LoadData();
  };
        // If 'product' object is missing from backend, show a fallback
        const productName =
          orderProduct.product?.name || "Loading product name...";
        const productImage =
          orderProduct.product?.image || "images/icons/placeholder.png";

        return (
          <Fragment key={orderProduct.productId || index}>
            <div className="product-image-container">
              <img src={productImage} alt={productName} />
            </div>

            <div className="product-details">
              <div className="product-name">{productName}</div>
              <div className="product-delivery-date">
                Arriving:{" "}
                {dayjs(orderProduct.estimatedDeliveryTimeMs).format("MMMM D")}
              </div>
              <div className="product-quantity">
                Quantity: {orderProduct.quantity}
              </div>
              <button className="buy-again-button button-primary">
                <img
                  className="buy-again-icon"
                  src="images/icons/buy-again.png"
                  alt="buy again"
                />
                <span className="buy-again-message" onClick={addtoCart}>Add to Cart</span>
              </button>
            </div>

            <div className="product-actions">
              <Link to={`/tracking/${order.id}/${orderProduct.product.id}`}>
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </Link>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
