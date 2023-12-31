import './SearchForm.css';
import logo from '../../images/lypa.svg';
import button_on from '../../images/smalltumb-min.svg'
import button_off from '../../images/smalltumboff-min.svg'

function SearchForm(props) {
    function handleChangeFilm(e) {
        props.setNameFilm(e.target.value);
    }
    return (
        <section className='search'>
            <img className='search__logo' alt='лупа' src={logo} />
            <div className='search__form'>
            <form className="form form_films">
                <input
                    value={props.nameFilm}
                    onChange={handleChangeFilm}
                    placeholder="Фильм"
                    type="text"
                    className="input"
                    required
                />
                <button onClick={props.handleSubmitFilms} className="form__button" type='submit'>
                    Найти
                </button>
            </form>
            </div>
            <div className='search__line'></div>
            <div className='search__container'>
            <button className='search__button' type='submit' onClick={props.handleKorot}>
                <img src={props.isKorot ? button_on : button_off} alt='кнопка' />
            </button>
            <p className='search__korot'>Короткометражки</p>
            </div>
        </section>
    );
}

export default SearchForm;