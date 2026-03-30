
import { OrderHeader } from "./OrderHeader";
import { OrderDetail } from "./OrderDetails";
export function OrderGrid({orders, LoadData,orderProduct}) {
  return (
       <div className="orders-grid">
              {orders.map((order) => (
                <div key={order.id} className="order-container">
                  <OrderHeader order={order}/>
    
                 <OrderDetail order={order} LoadData={LoadData} orderProduct={orderProduct}/>
                </div>
              ))}
            </div>
  );
}
