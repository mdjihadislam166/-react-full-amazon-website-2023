import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
               <h3>order summary frt</h3>
        <p>selected items :{cart.length}</p>
        </div>
    );
};

export default Cart;