import React, { useState, useEffect, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Content from "./components/content";
import { ColorContext, fontColor } from "./context";

function App() {
    const [cart, setCart] = useState(0);
    // const cart = 0

    useEffect(() => {
        console.log("semua method");
    }, [cart]);

    return (
        <>
            <ColorContext.Provider value={fontColor}>
                <Header cart={cart} />
                <button onClick={() => setCart(cart + 1)}>
                    Tambah keranjang
                </button>
                <Content />
            </ColorContext.Provider>
        </>
    );
}

export default App;
