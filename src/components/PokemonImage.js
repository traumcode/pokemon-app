function PokemonImage(props) {
    const URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonImage}.png`
    return <img src={URL} alt={props.name}></img>;
}

export default PokemonImage;