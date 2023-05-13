import { useEffect } from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css'

const Cards = ({characters}) => {
   return(
      <div className={style.container}>
       {characters.map(({id, name, species, gender, image, origin, status }) => {
         return <Card
         id={id}
         key={id}
         name={name}
         gender={gender}
         species={species}
         image={image}
         origin={name}
         status={status}
         onClose={() => window.alert("Emulamos que se cierra la card")}
         />
       })
       } 
      </div>
   )
};

export default Cards;
