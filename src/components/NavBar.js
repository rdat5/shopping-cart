import { Link } from "react-router-dom"

export default function NavBar() {
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
                <Link to={'/cart'}>🛒</Link>
            </li>
        </ul>
    </nav>
    );
}