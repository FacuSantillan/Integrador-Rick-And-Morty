import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css'
import { NavLink } from "react-router-dom";

const NavBar = ({onSearch}) => {
    return (
        <div className={style.nav}>
            <SearchBar onSearch={onSearch}/>

            <button className={style.BotonAbout}>
                <NavLink className={style.about} to='About'>About</NavLink>
            </button>

            <button className={style.BotonHome}>
                <NavLink className={style.Home} to='Home'>Home</NavLink>
            </button>

            <div>
            <img className={style.img} src="https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png"/>
            </div>

            <button className={style.Fav}>
                <NavLink className={style.Home} to='/favorites'>Favorites</NavLink>
            </button>
        </div>
    )
};

export default NavBar;