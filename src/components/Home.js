import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-page">
            <h2 className="shop-now-btn"><Link to={'/shop'}>Shop Now</Link></h2>
        </div>
    );
};