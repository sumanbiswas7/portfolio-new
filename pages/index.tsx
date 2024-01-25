// import { usePreloader } from "../hooks/usePreloader";
import { GoogleAnalytics } from "../lib/google-analytics";

import dynamic from "next/dynamic";
import classes from "../styles/home.module.scss";
import Navbar from "../components/navbar/navbar";

import { AboutSection } from "../components/sections/about";
import { HomeSection } from "../components/sections/home";
import { WorkSection } from "../components/sections/work";
import { StickyBar } from "../components/sticky-bar/sticky-bar";
import { SkillsSection } from "../components/sections/skills";
// import { PreLoader } from "../components/loader/loader";
import initFirstLoad from "../server/first-load";
const ContactNoSSR = dynamic(() => import("../components/sections/contact"), {
   ssr: false,
});

export default function Home() {
   // const { loading } = usePreloader();
   initFirstLoad();

   // if (loading) return <PreLoader />;
   return (
      <main className={classes.main}>
         <GoogleAnalytics />
         <div className={classes.bg_gradient} />
         <Navbar />
         <StickyBar />

         <div className={classes.content}>
            <HomeSection />
            <AboutSection />
            <SkillsSection skillsPage />
            <WorkSection />
            <ContactNoSSR />
         </div>
      </main>
   );
}
