
import { Product } from "./Product";

export function ProductGrid({ products , LoadData}) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
         <Product key={product.id} product={product} LoadData={LoadData}/>
        );
      })}
    </div>
  );
}