import classes from './Header.module.css';
import Navbar from './Navbar';

function Header() {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.headerpicture}>
          <div className={classes.text}>
            <h1>POKEMONs</h1>
          </div>
        </div>
      </header>
      <Navbar></Navbar>
    </div>
  );
}

export default Header;
