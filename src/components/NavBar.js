import { Link } from "react-router-dom"

export default function NavBar( {cartItemCount} ) {
    return (
    <nav className="page-nav-header">
        <h1>Brand Store</h1>
        <ul>
            <li>
                <Link to={'/'} className='nav-link'>Home</Link>
            </li>
            <li>
                <Link to={'/shop'} className='nav-link'>Shop</Link>
            </li>
            <li>
                <Link to={'/cart'}>🛒 ({cartItemCount})</Link>
            </li>
        </ul>
    </nav>
    );
}