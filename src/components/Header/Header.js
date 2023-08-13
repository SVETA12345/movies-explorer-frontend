import './Header.css';
import logo from '../../images/header__logo.png'
import { Link } from 'react-router-dom'; 

function Header({children}) {
  return (
      <header className='header'>
        <Link to ='/'>
            <img src={logo} alt='logo' className='header__logo'></img>
        </Link>
        {children}
      </header>
  );
}

export default Header;