import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import axios  from 'axios';
import {Routes, Route} from 'react-router-dom';
import About from './components/About/About'
import Detail from './components/Detail/Detail';


const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {

   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => char.id !== Number(id)))
   };

   return (
      <div className='App'>
         <NavBar onSearch={onSearch} />
         <Routes>
            <Route path='/' element={<Cards characters={characters} onClose={onClose} />}>
            </Route>
            <Route path= '/about' element= {<About />}></Route>
            <Route path= '/detail/:id' element= {<Detail />}></Route>
         </Routes>
      </div>
   );

   }
   export default App;
