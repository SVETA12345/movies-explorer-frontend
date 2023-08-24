import './Profile.css'
import PopupNavigation from "../PopupNavigation/PopupNavigation";
import Header from "../Header/Header";
import { Link, useNavigate } from 'react-router-dom';
import icon from '../../images/profile.svg';
import { useState, useEffect, useContext} from "react";
import { useForm } from 'react-hook-form'
import { api } from "../../utils/ApiMain.js";
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile(props) {
    let currentUser = useContext(CurrentUserContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(currentUser.name);
    const [email, setEmail] = useState(currentUser.email);
    const [isRed, setRed] = useState(false)
    const isDisabled=currentUser.name === name && currentUser.email=== email
    function signOut() {
        api.exitPage().then((data)=>{
          console.log('signOut',data)
          localStorage.removeItem('token');
          props.setLoggedIn(false)
    
        }).catch((err)=>{console.log(err)})
        
      }
    function handleChange(){
        setRed(true)
    }
    function handleChangeEmail(e){
        if (isRed){
            setEmail(e.target.value);
            }
    }
    function handleChangeName(e) {
        if (isRed){
        setName(e.target.value);
        }
      }
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        props.handleUpdateUser({
          name,
          email,
        });
      }
    function handleOpenData() {
        setIsOpen(true);
        props.handleActiveProfile()
    }
    return (
        <section className="profile">
            <PopupNavigation isOpen={isOpen} setIsOpen={setIsOpen} isGlavnay={props.isGlavnay}
         isFilms={props.isFilms} isSaveFilm={props.isSaveFilm} isProfile={props.isProfile}/>
            <Header isBlue={false}>
                    <Link to='/movies' className='header__link header__link_film'>Фильмы</Link>
                    <Link to='/saved-movies' className='header__link header__link_save'>Сохранённые фильмы</Link>
                    <Link to='/profile' className='header__link header__link_profile'>
                        <p>Аккаунт</p>
                        <div className='header__circle'>
                            <img src={icon} alt='человек' className='header__img' />
                        </div>
                    </Link>
                    <button type='button' className={isOpen ? "header__button" : "header__button header__button_active"} onClick={handleOpenData}>
                    </button>
               
            </Header>
            <main>
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            <form>
            <div className='profile__container'>
                <p className='profile__paragraph'>Имя</p>
                <input required name='profile' minLength={2}
        maxLength={30} className='profile__input' placeholder="Имя" type='text' value={name} onChange={handleChangeName}></input>
            </div>
            <div className='profile__container'>
                <p className='profile__paragraph'>E-mail</p>
                <input required name='profile' className='profile__input' placeholder="Email" type="email" value={email} onChange={handleChangeEmail}></input>
            </div>
            </form>
            <button className={isRed ? 'profile__disabled': 'profile__edit'} type='button' onClick={handleChange}>Редактировать</button>
            <Link onClick={signOut} to="/" className={isRed ? 'profile__disabled': 'profile__signout'}>
            Выйти из аккаунта
          </Link>
          <span className="form_register_error">{props.errProfile}</span>
          <button disabled={isDisabled} onClick={handleSubmit} type='submit' className={isRed ? (isDisabled ? 'profile__save login__save_disabled' : "profile__save"): 'profile__disabled'}>Сохранить</button>
          </main>
        </section>
    )
}

export default Profile;