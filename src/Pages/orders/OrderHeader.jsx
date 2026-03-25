import { OrderTotal } from "./OrderTotal";
import dayjs from "dayjs";
export function OrderHeader({order}) {
  return (
    <div className="order-header">
      <div className="order-header-left-section">
        <div className="order-date">
          <div className="order-header-label">Order Placed:</div>
          <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
        </div>
        <OrderTotal order={order} />
      </div>

      <div className="order-header-right-section">
        <div className="order-header-label">Order ID:</div>
        <div>{order.id}</div>
      </div>
    </div>
  );
}
