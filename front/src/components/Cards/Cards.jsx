import Card from "../Cards/Card";
import styleCard from "./Cards.module.css";
import { useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions";
import { useEffect } from "react";

export default function Cards({ characters, onClose }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <div className={styleCard.divCards}>
      {characters.map(({ id, name, species, gender, status, image }) => {
        return (
          <Card
            onClose={onClose}
            image={image}
            id={id}
            name={name}
            species={species}
            gender={gender}
            status={status}
            key={id}
          />
        );
      })}
    </div>
  );
}
