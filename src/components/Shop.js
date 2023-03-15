import Card from "./Card";
import { cardData } from "../data";

export default function Shop( {setCartFn} ) {
    return (
        <div className="shop-page">
            <div className="item-container">
                {cardData.map(item => <Card key={item.key} itemIndex={item.key} setCartFn={ setCartFn }/>)}
            </div>
        </div>
    );
};