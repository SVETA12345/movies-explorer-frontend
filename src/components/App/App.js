import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from "../Main/Main.js";
import Movies from '../Movies/Movies';
import { useState, useEffect } from "react";
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ServerError from '../ServerError/ServerError';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isGlavnay, setIsGlavnay] = useState(false);
  const [isFilms, setIsFilms] = useState(false);
  const [isSaveFilm, setIsSaveFilm] = useState(false);
  const [isProfile, setIsProfile] = useState(false)
  const [cards, setCards] = useState([]);
  const [indexCard, setIndexCard] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [isDisabled, setIsDisabled] = useState(false)
  const [isKorot, setIsKorot] = useState(false);
  const [saveCards, setSaveCards]=useState([])
  function handleKorot() {
    if (isKorot) {
      setIsKorot(false)
    }
    else {
      setIsKorot(true)
    }
  }
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    setCards([{ duration: 102, image: 'https://avatars.mds.yandex.net/i?id=5799ccf48d3e25ef52c3cb3cac1a957e-5560397-images-thumbs&n=13', nameRU: '33 слова о дизайне' },
    { duration: 60, image: 'https://avatars.mds.yandex.net/i?id=267b2fa5326ad6b5bd61d73f0b1e46106ac0e562-9181148-images-thumbs&n=13', nameRU: 'Киноальманах «100 лет дизайна»' },
    { duration: 50, image: 'https://m.media-amazon.com/images/M/MV5BMTljZDZhYTYtYmY3NS00NDZkLThkMjItYWZkODhkZjFmOGE5XkEyXkFqcGdeQXVyMTI0MjI2NDcz._V1_.jpg', nameRU: 'В погоне за Бенкси' },
    { duration: 50, image: 'https://avatars.mds.yandex.net/i?id=dbc65baf496ca1c6e6b35866b707ff77020c1013-8339391-images-thumbs&n=13', nameRU: 'Баския: Взрыв реальности' },
    { duration: 50, image: 'https://avatars.mds.yandex.net/i?id=d125ec34e65fb78b27a5e909496b19b1ec7672bf-9263927-images-thumbs&n=13', nameRU: 'Бег это свобода' },
    { duration: 102, image: 'https://avatars.mds.yandex.net/i?id=1ded3d12b1187ca8b5e59321b534ab171d312544-8000733-images-thumbs&n=13', nameRU: 'Книготорговцы' },
    { duration: 102, image: 'https://avatars.mds.yandex.net/i?id=2a00000189db87c2f0ecaad0ef2ed015cee0-1244236-fast-images&n=13', nameRU: 'Когда я думаю о Германии ночью' },
    { duration: 102, image: '', nameRU: 'Gimme Danger: История Игги и The Stooges' },
    { duration: 102, image: '', nameRU: 'Дженис: Маленькая девочка грустит' },
    { duration: 102, image: 'https://sun9-77.userapi.com/impf/c834203/v834203961/76bd6/n6p8YIrEXhI.jpg?size=1280x863&quality=96&sign=cf44d96ce0df9cfc415041555d79a8ce&c_uniq_tag=ERAl7LJn8XgBPiphnTQFRRHciPsyAlBLaq_N3Ci6UHM&type=album', nameRU: 'Соберись перед прыжком' },
    { duration: 102, image: '', nameRU: 'Пи Джей Харви: A dog called money' },
    { duration: 102, image: '', nameRU: 'По волнам: Искусство звука в кино' },
    { duration: 102, image: '', nameRU: 'Рудбой' },
    { duration: 102, image: 'https://kommersantinfo.com/wp-content/uploads/2020/10/Skejt-Kuhnya-1.jpg', nameRU: 'Скейт — кухня' },
    { duration: 102, image: '', nameRU: 'Война искусств' },
    { duration: 102, image: 'https://rotfront.org/wp-content/uploads/2022/05/20200526_turma3-1024x682.jpg', nameRU: 'Зона' }])
    setSaveCards([{ duration: 102, image: 'https://avatars.mds.yandex.net/i?id=5799ccf48d3e25ef52c3cb3cac1a957e-5560397-images-thumbs&n=13', nameRU: '33 слова о дизайне' },
    { duration: 60, image: 'https://avatars.mds.yandex.net/i?id=267b2fa5326ad6b5bd61d73f0b1e46106ac0e562-9181148-images-thumbs&n=13', nameRU: 'Киноальманах «100 лет дизайна»' },
    { duration: 50, image: 'https://m.media-amazon.com/images/M/MV5BMTljZDZhYTYtYmY3NS00NDZkLThkMjItYWZkODhkZjFmOGE5XkEyXkFqcGdeQXVyMTI0MjI2NDcz._V1_.jpg', nameRU: 'В погоне за Бенкси' }])
      if (width > 1024) {
        setIndexCard(16)
      }
      else if (width > 680) {
        setIndexCard(8)
      }
      else { setIndexCard(5) }
    
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    ;
  } }, []);

  function handleClickMoreCard() {
    if (indexCard + 8 >= cards.length) {
      setIndexCard(cards.length)
      setIsDisabled(true)
    }
    else {
      setIndexCard(indexCard + 8)
    }
  }
  function handleActiveGlavnay() {
    setIsGlavnay(true);
    setIsFilms(false);
    setIsSaveFilm(false);
    setIsProfile(false)
  }
  function handleActiveFilms() {
    setIsGlavnay(false);
    setIsFilms(true);
    setIsSaveFilm(false);
    setIsProfile(false)
  }
  function handleActiveSaveFilm() {
    setIsGlavnay(false);
    setIsFilms(false);
    setIsSaveFilm(true);
    setIsProfile(false)
  }
  function handleActiveProfile() {
    setIsGlavnay(false);
    setIsFilms(false);
    setIsSaveFilm(false);
    setIsProfile(true)
  }
  return (
    <div className="App">
      <div className='page'>
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} handleActiveGlavnay={handleActiveGlavnay} isGlavnay={isGlavnay}
          isFilms={isFilms} isSaveFilm={isSaveFilm} isProfile={isProfile} />} />
        <Route path="/movies" element={<Movies  handleActiveFilms={handleActiveFilms} isGlavnay={isGlavnay}
          isFilms={isFilms} isSaveFilm={isSaveFilm} isProfile={isProfile} cards={cards} width={width}
          indexCard={indexCard} handleClickMoreCard={handleClickMoreCard} isDisabled={isDisabled}
          handleKorot={handleKorot} isKorot={isKorot}
        />} />
        <Route path="/saved-movies" element={<SavedMovies  handleActiveSaveFilm={handleActiveSaveFilm} isGlavnay={isGlavnay}
          isFilms={isFilms} isSaveFilm={isSaveFilm} isProfile={isProfile} cards={saveCards} width={width}
          indexCard={indexCard} handleClickMoreCard={handleClickMoreCard} isDisabled={isDisabled}
          handleKorot={handleKorot} isKorot={isKorot}
        />} />
        <Route path="/profile" element={<Profile  loggedIn={loggedIn} handleActiveProfile={handleActiveProfile} isGlavnay={isGlavnay}
          isFilms={isFilms} isSaveFilm={isSaveFilm} isProfile={isProfile} />} />
        <Route path="/signin" element={<Login  />} />
        <Route path="/signup" element={<Register  />} />
        <Route path="/error" element={<ServerError  />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

