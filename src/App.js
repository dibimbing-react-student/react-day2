import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Content from "./components/content";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

export const ValueContext = createContext();

function App() {
    const [cart, setCart] = useState(0);
    const [resultData, setResultData] = useState([]);
    // const cart = 0

    const fontColor = {
        color: "blue",
    };

    useEffect(() => {
        console.log("semua method");
    }, [cart]);

    const fetchApi = async () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        const data = await fetch(
            "http://localhost:8000/products",
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => setResultData(result))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <>
            <ValueContext.Provider value={{ fontColor, cart, setCart }}>
                <Header cart={cart} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </ValueContext.Provider>
        </>
    );
}

export default App;
