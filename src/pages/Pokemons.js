import PokemonList from "../components/PokemonList";
import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Pokemons.module.css";

function Pokemons() {
  let [pokemonsList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  let [nextPage, setNextPage] = useState("");
  let [previousPage, setPreviousPage] = useState("");

  let URL = `${currentPage}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setPokemonList(response.data.results);
        setNextPage(response.data.next);
        setPreviousPage(response.data.previous);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [URL]);

  if (isLoading) {
    return <p>LOADING.....</p>;
  }

  return (
    <div>
      <h1>ALL POKEMONS</h1>
      <div className={classes.buttons}>
        <button onClick={() => setCurrentPage(previousPage)}>PREVIOUS</button>
        <button onClick={() => setCurrentPage(nextPage)}>NEXT</button>
      </div>

      <PokemonList pokemons={pokemonsList}></PokemonList>
    </div>
  );
}

export default Pokemons;
