import { useState } from "react";
import { cardData } from "../data.js";

export default function Card({ itemIndex, setCartFn }) {
    const [quantity, setQuantity] = useState(1);

    function onAddToCartClick() {
        for (let i = 0; i < quantity; i++) {
            setCartFn(prevItems => [...prevItems, itemIndex]);
        }
    }

    function onQuantityMinusClick() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    function onQuantityPlusClick() {
        setQuantity(quantity + 1)
    }

    return (
        <div className="card">
            <div className="image-container">
                <img src={cardData[itemIndex].image} alt={cardData[itemIndex].name}/>
            </div>
            <div className="card-desc-container">
                <h4><b>{cardData[itemIndex].name}</b></h4>
                <p>${cardData[itemIndex].price}</p>
                <div className="number-input">
                    <input 
                        type="number"
                        value={quantity}
                        min={1}
                        onChange={e => setQuantity(e.target.value)}
                    />
                    <div className="incrementers">
                        <button onClick={onQuantityMinusClick}>-</button>
                        <button onClick={onQuantityPlusClick}>+</button>
                    </div>
                </div>
                <button className="add-to-cart-btn" onClick={onAddToCartClick}>Add to Cart</button>
            </div>
        </div>
    );
}