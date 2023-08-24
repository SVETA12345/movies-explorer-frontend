import './Login.css';
import logo from '../../images/header__logo.svg'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
function Login(props) {
    
    function handleChangePassword(e) {
        props.setIsDisabledLogin()
        props.setErrLogin()
        props.setPasswordLogin(e.target.value);
      }
    function handleChangeEmail(e) {
        props.setIsDisabledLogin()
        props.setErrLogin()
        props.setEmailLogin(e.target.value);
    }
    return (
        <div className="login">
            <div className='login__container'>
            <Link to='/'>
                <img src={logo} alt='logo' className='login__logo'></img>
            </Link>
                <h1 className="login__title">Рады видеть!</h1>
                <form className="form">
                    <p className='form__subtitle'>E-mail</p>
                    <input
                        value={props.emailLogin}
                        onChange={handleChangeEmail}
                        type="email"
                        placeholder="Email"
                        className="login__input"
                        name="username"
                        required
                        id="username"

                    />
                    <span className="mesto-name-error form__item-error form__item-error_field_name"></span>
                    <p className='form__subtitle'>Пароль</p>
                    <input
                        value={props.passwordLogin}
                        onChange={handleChangePassword}
                        type="text"
                        placeholder="Пароль"
                        className="login__input"
                        name="password"
                        id="password"
                        required
                        minLength={2}
                        maxLength={40}
                    />
                    <span className="form_register_error">{props.errLogin}</span>
                    <button
                        className={props.disabledLogin ? "login__save login__save_disabled" : "login__save"}
                        type="submit"
                        onClick={props.handleSubmit}
                        disabled={props.disabledLogin}
                    >
                        Войти
                    </button>
                </form>
                <Link to="/signup" className="login__signup">
                Ещё не зарегистрированы? <span className='login__another-signup login__another-signup_active'>Регистрация</span>
                </Link>
            </div>
        </div>
    );
}

export default Login;