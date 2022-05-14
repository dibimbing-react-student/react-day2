import React, { useState, useContext } from "react";
import { ValueContext } from "../../App";
const Home = () => {
    const cartContext = useContext(ValueContext);
    const { cart, setCart } = cartContext;
    
    return (
        <div>
            <button onClick={() => setCart(cart + 1)}>Tambah keranjang</button>
        </div>
    );
};

export default Home;
