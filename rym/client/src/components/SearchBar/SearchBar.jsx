 import style from './SearchBar.module.css'
 import { useState } from 'react';
 
 
 const SearchBar = ({onSearch}) => {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   };

   return (
      <div className={style.contenedor}>
         <input placeholder='ingrese numero entre el 0 y el 826' className={style.search} type='search' onChange={handleChange} value={id}/> 
         <button className={style.button} onClick={()=> {onSearch(id)}}>Agregar</button> 
      </div>
   );
};

export default SearchBar;
