import { MetaHead } from "../components/meta-head";
import { AboutSection } from "../components/sections/about";
import { HomeSection } from "../components/sections/home";
import classes from "../styles/home.module.scss";

export default function Home() {
   return (
      <main className={classes.main}>
         <MetaHead />
         {/* Content */}
         <div className={classes.bg_gradient} />
         <HomeSection />
         <AboutSection />
      </main>
   );
}
