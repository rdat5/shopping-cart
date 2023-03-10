import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import NavBar from "./components/NavBar";

export default function RouteSwitch() {
    const [cartItems, setCartItems] = useState([]);

    return (
        <div className="page-wrap">
            <BrowserRouter>
                    <NavBar cartItemCount={cartItems.length}/>
                    <div className="page-main">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/shop" element={<Shop setCartFn={setCartItems}/>} />
                            <Route path="/cart" element={<ShoppingCart />}/>
                        </Routes>
                    </div>
                    <footer className="page-footer">
                        <small>Ray Allen Datuin 2023</small>
                    </footer>
            </BrowserRouter>
        </div>
    );
};