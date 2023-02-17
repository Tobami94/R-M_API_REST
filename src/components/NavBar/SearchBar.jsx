import NavStyle from "./Nav.module.css";
import { useState } from "react";


const SearchBar = (props) => { 
 const [character, setCharacter] = useState("");

    const handleInputChange = (event) => {
      const value = event.target.value
      setCharacter(value)
    }
    

return (
<div className={NavStyle.containerSearch}>
<input className={NavStyle.searchNav} type='search' value={character} onChange={handleInputChange} />
         <button className={NavStyle.botonSearch} type='submit' onClick={()=>{props.onSearch(character)
        setCharacter("")}}>Agregar</button>
           </div>
    );
    


 }

 export default SearchBar;