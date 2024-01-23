import classes from "./loader.module.scss";

export function PreLoader() {
   return (
      <div className={classes.main_cont}>
         <h4>Please wait...</h4>
      </div>
   );
}
