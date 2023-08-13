import './Register.css';
import logo from '../../images/header__logo.png'
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="login">
            <div className='login__container'>
            <Link to='/'>
                <img src={logo} alt='logo' className='login__logo'></img>
            </Link>
                <h1 className="login__title">Добро пожаловать!</h1>
                <form className="form popup__form">
                <p className='form__subtitle'>Имя</p>
                    <input
                        placeholder="Имя"
                        className="form__name_mesto_title login__input"
                        name="username"
                        required
                        id="username"
                    />
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
                        type="password"
                        placeholder="Пароль"
                        className="form__name_mesto_src login__input"
                        name="password"
                        id="password"
                        required
                    />
                    <span className="mesto-name-error form__item-error form__item-error_field_name"></span>
                    <button
                        className="login__save login__save_register popup__button"
                        type="submit"
                    >
                        Зарегистрироваться
                    </button>
                </form>
                <Link to="/signin" className="login__signup">
                Уже зарегистрированы? <span className='login__signup_active'>Войти</span>
                </Link>
            </div>
        </div>
    );
}

export default Register;