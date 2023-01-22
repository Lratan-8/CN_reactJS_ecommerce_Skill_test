import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./navbar.css";

const Navbar = () => {

    const items = useSelector((state) => state.cart);

    return (


        <div className='nav'>
            <Link className="navLink" to="/">

                <h2 >SHOPCITY </h2>

            </Link>
            <Link className="navLink" to="/addproduct">
                <h4 > Addproduct</h4>
            </Link>
            <Link className="navLink" to="/cart">
                <h4 > Cart : {items.length}</h4>
            </Link>
        </div>

    );
};

export default Navbar;