import styleCard from "./Cards.module.css";
import { Link } from "react-router-dom";


 const Card = (props) => {
   return (
     <div id={styleCard.madre} className={styleCard.containerSemi}>
     <div className={styleCard.cardContainer}>
     <button className={styleCard.borrarButton}onClick={props.onClose}>X</button> 
        <img  src={props.image} alt="" />
        <Link to={`/detail/${props.id}`}><h1 className={styleCard.boldText}>{props.name}</h1></Link>
         <div className={styleCard.dataCharters}> 
         <div className={styleCard.specie}> <h1 className={styleCard.boldText}>Specie</h1>
         <h2 className={styleCard.smallerText}>{props.species}</h2>
         </div>
         <div className={styleCard.gender}> <h1 className={styleCard.boldText}>Gender</h1>
         <h2 className={styleCard.smallerText}>{props.gender}</h2>
         </div>
         <div className={styleCard.state}> <h1 className={styleCard.boldText}>Status</h1>
         <h2 className={styleCard.smallerText}>{props.status}</h2>
         </div>
         </div>
      </div>
      </div>
   );
}

export default Card;
