import dynamic from "next/dynamic";
import { MetaHead } from "../components/meta-head";
import { AboutSection } from "../components/sections/about";
import { HomeSection } from "../components/sections/home";
import { WorkSection } from "../components/sections/work";
import { StickyBar } from "../components/sticky-bar/sticky-bar";
import { Hamburger } from "../components/ui/hamburger";
import classes from "../styles/home.module.scss";

const ContactNoSSR = dynamic(() => import("../components/sections/contact"), {
   ssr: false,
});

export default function Home() {
   return (
      <main className={classes.main}>
         <MetaHead />
         <div className={classes.bg_gradient} />
         <Hamburger />
         <StickyBar />

         <div className={classes.content}>
            <HomeSection />
            <AboutSection />
            <WorkSection />
            <ContactNoSSR />
         </div>
      </main>
   );
}
