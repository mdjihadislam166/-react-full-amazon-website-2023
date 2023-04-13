import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData();
    const [cart,setcart] = useState([]);

    const ClearCart = () =>{
        setcart([]);
        deleteShoppingCart();
    }
    
    // const [products,setproducts] = useState([]);
    // useEffect(()=>{
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setproducts(data);
        
    //     })
    // },[])

    useEffect(()=>{
        const storedCart = getStoredCart();
        const SavedCart =[];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
           if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            SavedCart.push(addedProduct);
           }
        }
        setcart(SavedCart);
    },[products])


    const handleAddToCart= (selectedProduct)=>{
       console.log(selectedProduct)
       let newCart = [];
       const exists = cart.find(product => product.id === selectedProduct.id);
       if(!exists){
        selectedProduct.quantity = 1;
        newCart = [...cart,selectedProduct];
       }
       else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
           newCart = [...rest,exists];
       }
      
       setcart(newCart);
      addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
         <div className="products-container">
        {
            products.map(product =><Product
                 key={product.id}
                 product={product}
                 handleAddToCart={handleAddToCart}

            ></Product>)
        }
         </div>
         <div className="cart-container">
        <Cart cart={cart} ClearCart={ClearCart}>
            <Link to="/order">
                <button>Review Order</button>
            </Link>
        </Cart>
         </div>
        </div>
    );
};

export default Shop;