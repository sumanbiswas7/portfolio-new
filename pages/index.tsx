import dynamic from "next/dynamic";
import { MetaHead } from "../components/meta-head";
import { AboutSection } from "../components/sections/about";
import { HomeSection } from "../components/sections/home";
import { WorkSection } from "../components/sections/work";
import { StickyBar } from "../components/sticky-bar/sticky-bar";
import classes from "../styles/home.module.scss";
import Navbar from "../components/navbar/navbar";
import { SkillsSection } from "../components/sections/skills";
import { useEffect, useState } from "react";
import { PreLoader } from "../components/loader/loader";
import { usePreloader } from "../hooks/usePreloader";

const ContactNoSSR = dynamic(() => import("../components/sections/contact"), {
   ssr: false,
});

export default function Home() {
   const { loading } = usePreloader();

   if (loading) return <PreLoader />;

   return (
      <main className={classes.main}>
         <MetaHead />
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
