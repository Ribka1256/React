import { formatMoney } from "../../util/money"
import axios from "axios"
import { useState } from "react"
export function Product({product, LoadData}){
      const [quantity, setQuantity] = useState(1)
      const [add, setAdd] = useState(false)

      const addToCart = async () =>{
             await axios.post('/api/cart-items?expand=product', {
                productId: product.id,
                 quantity
              })
            setAdd(true)
             await LoadData()
            }
            const selectQuantity = (event) =>{
              const  selctedQuantity = Number( event.target.value)
              setQuantity(selctedQuantity)
              }
    
    return(
           <div  className="product-container">
            <div className="product-image-container">
              <img className="product-image" src={product.image} />
            </div>

            <div className="product-name limit-text-to-2-lines">
              {product.name}
            </div>

            <div className="product-rating-container">
              <img
                className="product-rating-stars"
                src={`images/ratings/rating-${product.rating.stars * 10}.png`}
              />
              <div className="product-rating-count link-primary">
                {product.rating.count}
              </div>
            </div>

            <div className="product-price">
              {formatMoney(product.priceCents)}
            </div>

            <div className="product-quantity-container">
              <select value={quantity} onChange={selectQuantity}>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
              <img src="images/icons/checkmark.png" />
              Added
            </div>
  {add && <p>Added to Cart</p>}
            <button className="add-to-cart-button button-primary" onClick={addToCart}>
      
              Add to Cart
            </button>
            
           
          </div>
    )
}