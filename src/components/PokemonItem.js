import Card from "../ui/Card";
import PokemonImage from "./PokemonImage";
import classes from "./PokemonItem.module.css";

function PokemonItem(props) {
  return (
    <li className={classes.pokemons}>
      <Card>
        <div>
          <PokemonImage pokemonImage={props.imageNumber}></PokemonImage>
        </div>
        <div>
          <h3>{props.name}</h3>
        </div>
      </Card>
    </li>
  );
}

export default PokemonItem;
