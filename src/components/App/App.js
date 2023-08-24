import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from "../Main/Main.js";
import Movies from '../Movies/Movies';
import { useState, useEffect } from "react";
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ServerError from '../ServerError/ServerError';
import * as duckAuth from '../../utils/duckAuth.js';
import ProtectedRouteElement from '../ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { api } from "../../utils/ApiMain.js";
import { apiMovies } from '../../utils/MoviesApi';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });
  const [isLoading, setIsLoading] = useState(false)
  const [nameFilm, setNameFilm] = useState()
  const [disabledRegister, setIsDisabledRegister] = useState(false)
  const [disabledLogin, setIsDisabledLogin] = useState(false)
  const [passwordLogin, setPasswordLogin] = useState('');
  const [emailLogin, setEmailLogin] = useState('')
  const [errProfile, setErrProfile] = useState('')
  const [errLogin, setErrLogin] = useState('')
  const [errorRegister, setErrorRegister] = useState("")
  const [passwordRegister, setPasswordRegister] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [useremail, setEmailRegister] = useState("");
  const [username, setNameRegister] = useState('')
  const [loggedIn, setLoggedIn] = useState(false);
  const [isGlavnay, setIsGlavnay] = useState(false);
  const [isFilms, setIsFilms] = useState(false);
  const [isSaveFilm, setIsSaveFilm] = useState(false);
  const [isProfile, setIsProfile] = useState(false)
  const [cards, setCards] = useState([]);
  const [isKorotSaveFilms, setIsKorotSaveFilms] = useState(false)
  const [nameFilmSave, setNameFilmSave] = useState('')

  const [isKorot, setIsKorot] = useState(false);
  const [saveCards, setSaveCards] = useState([])
  const navigate = useNavigate();

  function handleKorot(e) {
    e.preventDefault();
    console.log('doisKorot', isKorot)
    if (isKorot) {
      localStorage.setItem(currentUser.email, [nameFilm, false]);
      setIsKorot(false)
    }
    else {
      localStorage.setItem(currentUser.email, [nameFilm, true]);
      setIsKorot(true)
    }
    console.log('isKorot', isKorot)

  }
  function handleKorotSave(e) {
    e.preventDefault();

    api.getDataSaveCards().then((data) => {
      let data_new = data.filter(function (item) {
        return item.nameRU.toLowerCase().includes(nameFilmSave.toLowerCase()) || item.nameEN.toLowerCase().includes(nameFilmSave.toLowerCase())
      })
      if (isKorotSaveFilms) {
        setIsKorotSaveFilms(false)
      }
      else {
        data_new = data_new.filter(function (item) {
          return item.duration <= 40
        })
        setIsKorotSaveFilms(true)
      }
      setSaveCards(data_new)
    }).catch((err) => { console.log(err) })
  }
  const tokenCheck = () => {
    // если у пользователя есть токен в localStorage, 
    // эта функция проверит, действующий он или нет
    duckAuth.getContent().then((res) => {
      if (res) {
        // авторизуем пользователя
        setLoggedIn(true);
        navigate("/movies", { replace: true })
      }
    }).catch((err) => console.log(err));

  }
  function handleSubmitFilms(e) {
    e.preventDefault();
    localStorage.setItem(currentUser.email, [nameFilm, isKorot]);
    apiMovies.getCardsData(setIsLoading).then((data) => {
      let data_new = data.filter(function (item) {
        return item.nameRU.toLowerCase().includes(nameFilm.toLowerCase()) || item.nameEN.toLowerCase().includes(nameFilm.toLowerCase())
      })
      if (isKorot) {
        data_new = data_new.filter(function (item) {
          return item.duration <= 40
        })
      }
      setCards(data_new)
    })
      .catch((err) => { console.log(err) })
  }
  function handleSubmitSavedFilms(e) {
    e.preventDefault();
    api.getDataSaveCards().then((data) => {
      let data_new = data.filter(function (item) {
        return item.nameRU.toLowerCase().includes(nameFilmSave.toLowerCase()) || item.nameEN.toLowerCase().includes(nameFilmSave.toLowerCase())
      })
      if (isKorotSaveFilms) {
        data_new = data_new.filter(function (item) {
          return item.duration <= 40
        })
      }
      setSaveCards(data_new)
    }).catch((err) => { console.log(err) })
  }
  useEffect(() => {
    if (localStorage.getItem(currentUser.email) !== null) {
      const dataFilm = localStorage.getItem(currentUser.email).split(',')
      if (currentUser.email) {

        setNameFilm(dataFilm[0])
        console.log('dataFilm', dataFilm)
        setIsKorot(JSON.parse(dataFilm[1]))
        console.log(dataFilm)
        console.log(nameFilm)
        console.log(1)
        apiMovies.getCardsData(setIsLoading).then((data) => {
          let data_new = data.filter(function (item) {
            return item.nameRU.toLowerCase().includes(dataFilm[0].toLowerCase()) || item.nameEN.toLowerCase().includes(dataFilm[0].toLowerCase())
          })
          if (JSON.parse(dataFilm[1])) {
            data_new = data_new.filter(function (item) {
              return item.duration <= 40
            })
          }
          setCards(data_new)
        })
          .catch((err) => { console.log(err) })
      }
    }


  }, [loggedIn, currentUser.email, localStorage.getItem(currentUser.email)])
  useEffect(() => {
    setNameFilmSave('')
    tokenCheck()
    const apiProfileDefult = api.getUserData();
    apiProfileDefult
      .then((data) => {
        setCurrentUser(data)
      })
      .catch((err) => console.log(err));
    api.getDataSaveCards().then((data) => {
      setSaveCards(data)
    }).catch((err) => { console.log(err) })
  }, [loggedIn]);

  function handleUpdateUser({ name, email }) {
    api
      .sendDataProfile(name, email)
      .then((data) => {
        setErrProfile('Запрос прошёл успешно!')
        setCurrentUser(data);
      })
      .catch((err) => {
        if (err.status === 409) {
          setErrProfile('Пользователь с таким email уже существует')
        }
        else {
          setErrProfile('При обновлении профиля произошла ошибка')
        }
      });
  }

  function handleSubmitRegister(e) {
    e.preventDefault();
    duckAuth.register(passwordRegister, useremail, username).then((res) => {
      setErrorRegister('')
      if (res) {
        setIsRegister(true);
        localStorage.setItem(useremail, ['', isKorot]);
        duckAuth
          .authorize(passwordRegister, useremail)
          .then((data) => {
            console.log('dataAVT', data)
            if (data.token) {
              console.log('avtoriz yes')
              setEmailRegister("");
              setPasswordRegister("");
              setLoggedIn(true)
              setErrorRegister('')
              navigate("/movies", { replace: true });

            }
            else {
              setErrorRegister('При авторизации произошла ошибка. Токен не передан или передан не в том формате')
            }
          })
          .catch((err) => {
            setErrorRegister('При авторизации произошла ошибка. Переданный токен некорректен.')
          });

      } else {
        setIsRegister(false);
      }
    }).catch((err) => {
      setIsDisabledRegister(true)
      if (err.status == 409) {
        setErrorRegister('Пользователь с таким email уже существует')
      }
      else {
        setErrorRegister('При регистрации пользователя произошла ошибка')
      }
      console.log(err)
    });;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    duckAuth
      .authorize(passwordLogin, emailLogin)
      .then((data) => {
        console.log('dataAVT', data)
        if (data.token) {
          setEmailLogin("");
          setPasswordLogin("");
          setLoggedIn(true)
          setErrLogin('')
          navigate("/movies", { replace: true });
        }
        else {
          setErrLogin('При авторизации произошла ошибка. Токен не передан или передан не в том формате')
        }
      })
      .catch((err) => {
        setIsDisabledLogin(true)
        if (err.status === 401) {
          setErrLogin('Вы ввели неправильный логин или пароль')
        }
        else if (err.status === 429) {
          setErrLogin('Превышен лимит запросов')
        }
        else {
          setErrLogin('При авторизации произошла ошибка. Переданный токен некорректен.')
        }
      });
  };

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className='page'>
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} handleActiveGlavnay={handleActiveGlavnay} isGlavnay={isGlavnay}
              isFilms={isFilms} isSaveFilm={isSaveFilm} isProfile={isProfile} />} />
            <Route path="/movies" element={<ProtectedRouteElement element={<Movies setSaveCards={setSaveCards} loggedIn={loggedIn} isLoading={isLoading} nameFilm={nameFilm} handleSubmitFilms={handleSubmitFilms} setNameFilm={setNameFilm} handleActiveFilms={handleActiveFilms} isGlavnay={isGlavnay}
              isFilms={isFilms} isSaveFilm={isSaveFilm} isProfile={isProfile} cards={cards} saveCards={saveCards}
              handleKorot={handleKorot} isKorot={isKorot}
            />} loggedIn={loggedIn} />} />
            <Route path="/saved-movies" element={<ProtectedRouteElement element={<SavedMovies setSaveCards={setSaveCards} handleActiveSaveFilm={handleActiveSaveFilm} isGlavnay={isGlavnay}
              isFilms={isFilms} isSaveFilm={isSaveFilm} isProfile={isProfile} cards={saveCards} saveCards={saveCards} loggedIn={loggedIn} nameFilm={nameFilmSave} setNameFilm={setNameFilmSave}
              handleKorot={handleKorotSave} isKorot={isKorotSaveFilms} handleSubmitFilms={handleSubmitSavedFilms}
            />} loggedIn={loggedIn} />} />
            <Route path="/profile" element={<ProtectedRouteElement element={<Profile errProfile={errProfile} handleUpdateUser={handleUpdateUser} setLoggedIn={setLoggedIn} loggedIn={loggedIn} handleActiveProfile={handleActiveProfile} isGlavnay={isGlavnay}
              isFilms={isFilms} isSaveFilm={isSaveFilm} isProfile={isProfile} />} loggedIn={loggedIn} />} />
            <Route path="/signin" element={<Login setErrLogin={setErrLogin} setIsDisabledLogin={setIsDisabledLogin} disabledLogin={disabledLogin} errLogin={errLogin} emailLogin={emailLogin} setEmailLogin={setEmailLogin} passwordLogin={passwordLogin} setPasswordLogin={setPasswordLogin} handleSubmit={handleSubmit} />} />
            <Route path="/signup" element={<Register setIsDisabledRegister={setIsDisabledRegister} disabledRegister={disabledRegister} errorRegister={errorRegister} username={username} setEmailRegister={setEmailRegister} isRegister={isRegister} setPasswordRegister={setPasswordRegister} passwordRegister={passwordRegister} setNameRegister={setNameRegister} useremail={useremail} handleSubmitRegister={handleSubmitRegister} setIsRegister={setIsRegister} />} />
            <Route path="*" element={<ServerError />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

