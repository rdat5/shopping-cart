import { cardData } from "../data.js";

export default function CartListItem() {
    return (
        <div className="cart-list-item">
            <div className="cart-item-pic">
                <img src={cardData[3].image} alt={cardData[3].name}/>
            </div>
            <div className="cart-list-desc">
                <h4>{cardData[3].name}</h4>
                <p>${cardData[3].price}</p>
                <button>Delete</button>
            </div>
        </div>
    );
}