import React from 'react';
import './Cart.css'
const Cart = ({ cart }) =>
{
    let total = 0;
    let shipping = 0;
    
    for (const product of cart)
    {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));

    let grand = total + shipping + tax;

    return (
        <div className="cart-container">
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h4>Grand Total: {grand.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;