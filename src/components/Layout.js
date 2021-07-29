import Header from "./Header";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Header></Header>
      <div className={classes.content}>
        <main className={classes.main}>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
