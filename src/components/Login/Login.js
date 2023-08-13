import './Login.css';
import logo from '../../images/header__logo.png'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <div className='login__container'>
            <Link to='/'>
                <img src={logo} alt='logo' className='login__logo'></img>
            </Link>
                <h1 className="login__title">Рады видеть!</h1>
                <form className="form popup__form">
                    <p className='form__subtitle'>E-mail</p>
                    <input
                        type="email"
                        placeholder="Email"
                        className="form__name_mesto_title login__input"
                        name="username"
                        required
                        id="username"
                    />
                    <span className="mesto-name-error form__item-error form__item-error_field_name"></span>
                    <p className='form__subtitle'>Пароль</p>
                    <input
                        type="text"
                        placeholder="Пароль"
                        className="form__name_mesto_src login__input"
                        name="password"
                        id="password"
                        required
                    />
                    <span className="mesto-name-error form__item-error form__item-error_field_name"></span>
                    <button
                        className="login__save popup__button"
                        type="submit"
                    >
                        Войти
                    </button>
                </form>
                <Link to="/signup" className="login__signup">
                Ещё не зарегистрированы? <span className='login__signup_active'>Регистрация</span>
                </Link>
            </div>
        </div>
    );
}

export default Login;