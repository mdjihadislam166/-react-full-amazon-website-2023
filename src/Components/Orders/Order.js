import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Review from "../Review/Review";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";




const Order = () => {
  const { products, initialCart } = useLoaderData(); //{products : products, initialCart : initialCart}
  const [cart, setcart] = useState(initialCart);
//   console.log(cart)


const HandleRemoveItem =(id) =>{
   const remaining = cart.filter(product => product.id !== id);
   setcart(remaining);
   removeFromDb(id)
}
const ClearCart = () =>{
    setcart([]);
    deleteShoppingCart();
}
  return (
    
      <div className="shop-container">
        <div className="orders-container">
         {
            cart.map(product => <Review
            key={product.id}
            product={product}
            HandleRemoveItem={HandleRemoveItem}
            ></Review>)
         }
         {
            cart.length === 0 && <h2>No Item for Review. Please <Link to="/">Shop More</Link></h2>
         }
     
        </div>
        <div className="cart-container">
          <Cart ClearCart={ClearCart} cart={cart}></Cart>
        </div>
      </div>
   
  );
};

export default Order;
