import './MoviesCard.css';
import image from '../../images/noimage.png'
import saveLike from '../../images/save1.svg'
import like from '../../images/save1d.svg'
import close from '../../images/close.svg'
import { useEffect, useState } from 'react';
import { api } from "../../utils/ApiMain.js";
const server_url = 'https://api.nomoreparties.co'
function MoviesCard({ card, isSaveFilm, ...props }) {
  const [isLiked, setIsLiked] = useState(false)
  let duration
  useEffect(() => {
    for (let index = 0; index < props.saveCards.length; index += 1) {
      console.log(props.saveCards[index].id, card.id)
      if (props.saveCards[index].id === card.id) {
        setIsLiked(true)
        break
      }
      setIsLiked(false)
    }
  }, [props.loggedIn, props.handleSubmitFilms])
  if (card.duration < 60) {
    duration = `${card.duration}м`
  }
  else if (card.duration % 60 === 0) {
    duration = `${parseInt(card.duration / 60)}ч`
  }
  else { duration = `${parseInt(card.duration / 60)}ч${card.duration % 60}м` }
  function handleLikeClick() {
    if (isLiked) {
      for (let index = 0; index < props.saveCards.length; index += 1) {
        if (props.saveCards[index].id === card.id) {
          const _id = props.saveCards[index]._id
          api.deleteClickLike(_id).then(() => {
            setIsLiked(false)
            const saveCardsNew = props.saveCards.filter((item) => {
              return item.id !== card.id
            })
            props.setSaveCards(saveCardsNew)
          }).catch((err) => (console.log(err)))
          break
        }
      }

    }
    else {
      api.addClickLike(card).then((data) => {

        const saveCardsNew = props.saveCards
        saveCardsNew.push(data)
        console.log('saveCardsNew', saveCardsNew, data, props.saveCards)
        props.setSaveCards(saveCardsNew)
        setIsLiked(true)
      }).catch((err) => { console.log(err) })
    }

  }
  return (
    <div className="place">
      <div className="place__info">
        <a href={card.trailerLink} target="_blank" rel="noopener noreferrer">
          <img
            className="place__photo"
            src={card.image.url === '' ? image : server_url + card.image.url}
            alt={card.nameRU}
          />
        </a>
      </div>
      <div className="place__footer">
        <div className='place__contain'>
          <h2 className="place__title">{card.nameRU}</h2>
          <button
            className='place__like'
            type="button"
            onClick={handleLikeClick}
          >
            <img
              src={isSaveFilm ? close : (isLiked ? saveLike : like)}
              alt={card.nameRU}></img>
          </button>
        </div>
        <p className='place__duration'>{duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;