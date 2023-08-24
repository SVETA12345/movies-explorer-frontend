import './MoviesCardList.css';
import '../MoviesCard/MoviesCard'
import MoviesCard from '../MoviesCard/MoviesCard';
import { Children } from 'react';

function MoviesCardList(props) {  
        return (
            <section className='places'>
            <ul className="places__container">
            {props.cards.slice(0, props.roundedVisibleCardCount).map((card) => (
              <li>
              <MoviesCard setSaveCards={props.setSaveCards} handleSubmitFilms={props.handleSubmitFilms}
              loggedIn={props.loggedIn} card={card} isSaveFilm={props.isSaveFilm} saveCards={props.saveCards}
              />
              </li>
            ))}
          </ul>
          {props.children}
          </section>
        )
    
}

export default MoviesCardList;