import './SavedMovies.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import icon from '../../images/profile.svg'
import { useState, useEffect } from "react";
import PopupNavigation from '../PopupNavigation/PopupNavigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
function SavedMovies(props) {
    const [isOpen, setIsOpen] = useState(false);
    function handleOpenData() {
        setIsOpen(true);
        props.handleActiveSaveFilm()
    }
    return (
        <section className="movies">
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
            <SearchForm isKorot={props.isKorot} handleKorot={props.handleKorot}/>
            <div className='movies__line'></div>
            <MoviesCardList isDisabled={props.isDisabled} cards={props.cards} width={props.width} indexCard={props.indexCard}
             handleClickMoreCard={props.handleClickMoreCard} isKorot={props.isKorot} isSaveFilm={true}>
             </MoviesCardList>
        <Footer />
        </section>
        
    );
}

export default SavedMovies;