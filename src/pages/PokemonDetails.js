import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./PokemonDetails.module.css";

function PokemonDetails(props) {
  let [pokemonName, setpokemonName] = useState([]);
  let [pokemonAbilities, setPokemonAbilities] = useState([]);
  let [pokemonStats, setPokemonStats] = useState([]);
  let [pokemonImage, setPokemonImage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  let URL = `https://pokeapi.co/api/v2/pokemon/${props.location.state}`;

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(response.data);
      setpokemonName(response.data.name);
      setPokemonImage(response.data.sprites.front_default);
      setPokemonAbilities(response.data.abilities);
      setPokemonStats(response.data.stats);
      setIsLoading(false);
    });
  }, [URL]);

  if (isLoading) {
    return <h1>Loading pokemon ...</h1>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.pokemonImage}>
        <img src={pokemonImage} alt="pokemon"></img>
      </div>
      <div className={classes.title}>
        <h1>{pokemonName}</h1>
      </div>
      <div className={classes.content}>
        <div className={classes.pokemonPowers}>
          <h3>Powers:</h3>
          {pokemonAbilities.length > 0 ? (
            pokemonAbilities.map((ability) => <p>{ability.ability.name}</p>)
          ) : (
            <p>No abilities</p>
          )}
        </div>
        <div>
          <h3>Stats:</h3>
          {pokemonStats.length > 0 ? (
            pokemonStats.map((stat) => (
              <div>
                <p>
                  {stat.base_stat} - {stat.stat.name}
                </p>
              </div>
            ))
          ) : (
            <p>No stats</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
