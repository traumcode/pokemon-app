import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.nav}>
        <div className={classes.rightul}>
          <li className={classes.link}>
            <Link to="/pokemons">Pokemons</Link>
          </li>
          <li className={classes.link}>
            <Link to="/types">Types</Link>
          </li>
        </div>
        <div className={classes.leftul}>
          <li className={classes.link}>
            <Link to="/about" className={classes.active}>
              About
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
