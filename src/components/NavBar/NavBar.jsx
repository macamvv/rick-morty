import SearchBar from '../SearchBar/SearchBar'
import style from './NavBar.module.css'
import {Link} from 'react-router-dom';

const NavBar = ({onSearch}) =>{

    return (
        <div className = {style.contenedor}>
            <SearchBar onSearch={onSearch}/>
            <Link to="/About">
            <button >ABOUT</button>
            </Link>
            <Link to="/">
            <button>HOME</button>
            </Link>
            
        </div>
    )
}

export default NavBar