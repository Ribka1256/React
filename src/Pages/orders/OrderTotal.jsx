import { formatMoney } from "../../util/money";
export function OrderTotal({order}) {
  return (
    <div className="order-total">
      <div className="order-header-label">Total:</div>
      <div>{formatMoney(order.totalCostCents)}</div>
    </div>
  );
}
