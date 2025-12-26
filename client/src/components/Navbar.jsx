import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/react.svg'
import '../styles/Navbar.css'
import Button from './Button';

function Navbar() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('auth/signin');
    };
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
                <span>TAGLAY-LEE</span>
            </div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/articles'>Articles</Link>
                </li>
            </ul>
            <Button onClick={handleLoginClick}>Login</Button>
        </nav>
    )
}

export default Navbar
