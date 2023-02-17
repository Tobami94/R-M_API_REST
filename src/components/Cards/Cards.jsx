import Card from "../Cards/Card";
import styleCard from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props; 


   return <div className={styleCard.divCards}>
      {
       characters.map((character, i)=> 
       <Card 
       onClose={() => {props.onClose(character.id)}} 
       image={character.image} 
       id={character.id}
       name={character.name} 
       species={character.species} 
       gender={character.gender} 
       status={character.status}
       key={i}
       />
       )
      }</div>
};
