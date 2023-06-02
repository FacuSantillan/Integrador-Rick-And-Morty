import './App.css';
import Cards from './components/Cards/Cards.jsx';
import style from './App.module.css'
import NavBar from './components/NavBar/NavBar';
import { useState ,useEffect } from 'react';
import axios from 'axios'
import { Route, Routes,useLocation, useNavigate } from 'react-router-dom';
import About from '../src/components/Routes/About'
import Detail from './components/Routes/Detail';
import Forms from "./components/form";
import Favorites from "../src/components/Favorites";
const EMAIL = 'facusantillan1@gmail.com';
const PASSWORD = '203320Facu';

function App() {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();


  const navigate = useNavigate();
  const [access, setAccess] = useState(false);


function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
};

useEffect(() => {
  !access && navigate('/');
}, [access]);
  


  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (

    <div className={style.App}>
     {pathname !== '/' && <NavBar onSearch={onSearch} />}

         <Routes>
            <Route path="/" element={<Forms login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
         </Routes>

    </div>
  );
}

export default App;
