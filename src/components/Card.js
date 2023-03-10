import testImage from "../img/barrel.jpg";

export default function Card() {
    return (
        <div className="card">
            <div className="image-container">
                <img src={testImage} alt="barrel jellyfish"/>
            </div>
            <div className="card-desc-container">
                <h4><b>Barrel Jellyfish</b></h4>
                <p>$112.99</p>
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