import classes from "./home.module.scss";

export function HomeSection() {
   return (
      <div className={classes.container}>
         <div className={classes.left_box}></div>
         <div className={classes.right_box}></div>
      </div>
   );
}
