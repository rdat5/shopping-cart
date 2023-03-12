import CartListItem from "./CartListItem";

export default function ShoppingCart() {
    return(
        <div className="cart-page">
            <div className="shopping-cart">
                <h1>Shopping Cart</h1>
                <div className="cart-list">
                    <CartListItem/>
                    <CartListItem/>
                    <CartListItem/>
                </div>
                <h2 className="cart-total">Total: ${100.00}</h2>
                <button className="pay-now-btn">Pay Now</button>
            </div>
        </div>
    );
}