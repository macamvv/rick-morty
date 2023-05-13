import style from './Card.module.css';
import { Link } from 'react-router-dom'


const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {
  return (
    <div className={style.contenedor}>
      {<button onClick={() => { onClose(id) }}>X</button>}
      <Link to={`/detail/${id}`}>
        <img src={image} alt="" />
        <div className={style.contenedor}>
          <h2>{name}</h2>
          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{origin}</h2>
          {<button onClick={() => { onClose(id) }}>X</button>}
        </div>
      </Link>
    </div>
  );
 }

export default Card