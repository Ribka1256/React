import { formatMoney } from "../../util/money";
export function PaymentSummary({payment}) {
  return (
    <div className="payment-summary">
      <div className="payment-summary-title">Payment Summary</div>
      {payment && (
        <>
          <div className="payment-summary-row">
            <div>Items ({payment.totalItems}):</div>
            <div className="payment-summary-money">
              {formatMoney(payment.productCostCents)}
            </div>
          </div>

          <div className="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div className="payment-summary-money">
              {formatMoney(payment.shippingCostCents)}
            </div>
          </div>

          <div className="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div className="payment-summary-money">
              {formatMoney(payment.totalCostBeforeTaxCents)}
            </div>
          </div>

          <div className="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div className="payment-summary-money">
              {formatMoney(payment.taxCents)}
            </div>
          </div>

          <div className="payment-summary-row total-row">
            <div>Order total:</div>
            <div className="payment-summary-money">
              {formatMoney(payment.totalCostCents)}
            </div>
          </div>

          <button className="place-order-button button-primary">
            Place your order
          </button>
        </>
      )}
    </div>
  );
}
