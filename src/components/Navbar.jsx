import Diveder from "./Divider"
import { Link } from 'react-router-dom'
import Logo from '../assets/images/hp-logo.png'
const Navbar = () => {
  return (
    <div className="navbar d-flex">
      <div className="logo">
        <Link to='/'>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-links">
        <ul className="d-flex">
          <li><Diveder /></li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/spells">Spells</Link>
          </li>
          <li><Diveder /></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar