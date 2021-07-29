import PokemonItem from "./PokemonItem";
import classes from "./PokemonList.module.css";
import Card from "../ui/Card";
import { Link } from "react-router-dom";

function PokemonList(props) {
  
  function getUrlNumber(url) {
    let number = url.substring(34, url.length - 1);
    return number;
  }

  return (
    <ul>
      {props.pokemons.map((pokemon) => {
        let pokemonNumber = getUrlNumber(pokemon.url);
        return (
          <Link
            to={{ pathname: "/pokemon/" + pokemonNumber, state: pokemonNumber }}
          >
            <PokemonItem
              key={pokemon.name}
              imageNumber={pokemonNumber}
              name={pokemon.name}
            ></PokemonItem>
          </Link>
        );
      })}
    </ul>
  );
}

export default PokemonList;
