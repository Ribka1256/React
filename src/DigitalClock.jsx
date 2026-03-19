import React,{useEffect, useState} from "react";
/*
function DigitalClock(){
  const [clock, setClock] = useState(new Date())

  useEffect(() =>{
    const interval = setInterval(() =>{
        setClock(new Date())
    })
    return () =>{
      clearInterval(interval)
    }
  },[])
  function Time(){
let hours  = clock.getHours();
const minutes = clock.getMinutes();
const seconds = clock.getSeconds();
const merdiam = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;
return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${merdiam}`
  }
  function padZero(number){
    return number < 10 ? `0${number}` : number;

  }
     return(
            <div>
                <h1>Digital Clock</h1>
                <span>{Time()}</span>
            </div>
        )
}*/
function DigitalClock(){
  const [cart, setCart] = useState([]);
  const [newCartItem, setNewCartItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
let total = 0;
  function hanldeChange(event){
    setNewCartItem(event.target.value);
  }
    function handleChangeN(event){
    setQuantity(Number(event.target.value))
  }
  function handleChangeP(event){
    setPrice(Number(event.target.value))
  }
    function add(){
      if(!newCartItem.trim()) return;
    setCart(c => [...c, {name: newCartItem, quantity: Number(quantity), price: Number(price)}]);

    setNewCartItem("")
    setQuantity(1)
  }
 
  function del(index){
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);

  }
  return(

    <>
    <div className="temp1">
      <h1>Simple Shopping Cart</h1>
    <div className="temp">
    ITEM: <input type="text" placeholder="enter the shopping list" value={newCartItem} onChange={hanldeChange}></input>
    <button onClick={add}>Add</button><br></br>
     QUANTITY: {newCartItem &&  (
  <input
    type="number"
    value={quantity}
    onChange={handleChangeN}
  />
)}<br/>PRICE: 
   {newCartItem &&  (
  <input
    type="number"
    value={price}
    onChange={handleChangeP}
  />
)}

    </div>
    <ol>
      {cart.map((item, index) =>
      <li key={index}>{item.name} - Quantity: {item.quantity} Price: ${item.price.toFixed(2)}<br/>
      
       total: ${total += item.quantity * item.price}
        <button onClick={() => del(index)}>Delete</button>
       </li>

      )}
    
    </ol>
</div>
    </>
  )
}
export default DigitalClock;