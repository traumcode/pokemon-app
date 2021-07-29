import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import PokemonDetails from "./pages/PokemonDetails";
import Pokemons from "./pages/Pokemons";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./ui/Themes.js";
import classes from './App.module.css';

const StyledApp = styled.div``;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles></GlobalStyles>
      <StyledApp>
        <Layout>


          <Switch>
            <Route path="/" exact></Route>
            <Route path="/pokemons" exact>
              <Pokemons></Pokemons>
            </Route>
            <Route
              exact
              path="/pokemon/:pokemonNumber"
              component={PokemonDetails}
            />
          </Switch>
        </Layout>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
