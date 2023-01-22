import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { remove } from '../features/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const [Cart, setCart] = useState(products)
    useEffect(() => {
        setCart(products);
        console.log(Cart)
    })
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (

        <div style={{ textAlign: 'center' }}>
            {
                Cart.length < 1 && <h2 style={{ marginTop: '200px', color: 'white' }}>Please add some products to the cart</h2>
            }
            {
                Cart.length > 0 && <div style={{ backgroundColor: 'lightgrey' }} className="container" >
                    <h3>Cart</h3>
                    {products.map((product) => (
                        <div key={product.id} className="mt-4" id='cartitem' style={{ border: "3px solid pink", borderRaduis: "9px" }}>
                            <div id='cartimg'>
                                <img src={product.image} alt="" />
                            </div>
                            <div id='cartspec'>
                                <h5>{product.title}</h5>
                                <h5>{product.price}</h5>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleRemove(product.id)}> Remove </button>
                            </div>
                        </div>
                    ))}
                </div>
            }




        </div>

    );
};

export default Cart;