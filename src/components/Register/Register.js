import './Register.css';
import logo from '../../images/header__logo.svg'
import { Link } from 'react-router-dom';

function Register(props) {
    function handleChangeName(e) {
        props.setIsDisabledRegister(false)
        props.setNameRegister(e.target.value);
      }
    function handleChangePassword(e) {
        props.setIsDisabledRegister(false)
        props.setPasswordRegister(e.target.value);
      }
    function handleChangeEmail(e) {
        props.setIsDisabledRegister(false)
        props.setEmailRegister(e.target.value);
    }
    return (
        <div className="login">
            <div className='login__container'>
            <Link to='/'>
                <img src={logo} alt='logo' className='login__logo'></img>
            </Link>
                <h1 className="login__title">Добро пожаловать!</h1>
                <form className="form">
                <p className='form__subtitle'>Имя</p>
                    <input
                        value={props.username}
                        onChange={handleChangeName}
                        placeholder="Имя"
                        className="login__input"
                        name="username"
                        required
                        id="username"
                        minLength={2}
                        maxLength={30}
                    />
                    <p className='form__subtitle'>E-mail</p>
                    <input
                        value={props.useremail}
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
                        value={props.password}
                        onChange={handleChangePassword}
                        type="password"
                        placeholder="Пароль"
                        className="login__input"
                        name="password"
                        id="password"
                        required
                        minLength={2}
                        maxLength={40}
                    />
                    <span className="form_register_error">{props.errorRegister}</span>
                    <button
                        className={props.disabledRegister ? "login__save login__save_register login__save_disabled" : "login__save login__save_register"}
                        type="submit"
                        onClick={props.handleSubmitRegister}
                        disabled={props.disabledRegister}
                    >
                        Зарегистрироваться
                    </button>
                </form>
                <Link to="/signin" className="login__signup">
                Уже зарегистрированы? <span className='login__another-signup login__another-signup_active'>Войти</span>
                </Link>
            </div>
        </div>
    );
}

export default Register;