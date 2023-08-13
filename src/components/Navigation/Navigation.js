import './Navigation.css';
import { Link } from 'react-router-dom';
function Navigation() {
  return (
        <div className='navigation'>
          <Link to='/signup' className='navigation__button'>Регистрация</Link>
          <Link to='/signin' className='navigation__button navigation__button_active'>Войти</Link>
        </div>
  );
}

export default Navigation;