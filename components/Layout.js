import classes from "../styles/main.module.css";
import MainNavigation from "./MainNavigation";
const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
