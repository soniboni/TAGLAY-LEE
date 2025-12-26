import{ Link } from 'react-router-dom'
import logo from '../assets/react.svg'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <img src={logo} alt="react-logo" />
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
    </nav>
  )
}

export default Navbar