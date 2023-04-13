import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const {cart,ClearCart,children} = props;
    let total = 0;
    let Shipping = 0;
    let quantity = 0;
    

    for(const product of cart){
      quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        Shipping = Shipping + product.shipping;
    }
const Taxt =parseFloat(( total *0.1).toFixed(2));
const GrandTotal = total + Shipping + Taxt;
  return (
    <div className="cart">
      <h3>order summary frt</h3>
      <p>selected items :{quantity}</p>
      <p>Total Price:${total}</p>
      <p>Total Shipping:${Shipping}</p>
      <p>Tax:{Taxt}</p>
      <h5>Grand Total:{GrandTotal.toFixed(2)}</h5>
      <button onClick={ClearCart}>
        Clear Cart
      </button>
      {children}
    </div>
  );
};

export default Cart;
