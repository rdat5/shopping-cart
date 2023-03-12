import { cardData } from "../data.js";

export default function Card({ itemIndex }) {
    return (
        <div className="card">
            <div className="image-container">
                <img src={cardData[itemIndex].image} alt={cardData[itemIndex].name}/>
            </div>
            <div className="card-desc-container">
                <h4><b>{cardData[itemIndex].name}</b></h4>
                <p>${cardData[itemIndex].price}</p>
                <div className="number-input">
                    <input type="number"></input>
                    <div className="incrementers">
                        <button>-</button>
                        <button>+</button>
                    </div>
                </div>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    );
}