import dayjs from "dayjs";
import { formatMoney } from "../../util/money";
export function DeliveryOptions({ cartItem, deliveryOptions}) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOptions) => {
        let priceString = "FREE shipping";
        if (deliveryOptions.priceCents > 0) {
          priceString = `${formatMoney(deliveryOptions.priceCents)} - shipping`;
        }
        return (
          <div key={deliveryOptions.id} className="delivery-option">
            <input
              type="radio"
              checked={deliveryOptions.id === cartItem.deliveryOptionsId}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOptions.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM, D",
                )}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
