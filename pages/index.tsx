import Head from "next/head";
import { Project } from "../components/Project/Project";
import styles from "../styles/Home.module.scss";
import { Contact } from "../components/Contact/Contact";
import { Skills } from "../components/Skills/Skills";
import { About } from "../components/About/About";
import useViews from "../hooks/useViews";
import { Home as HomePage } from "../components/Home/Home";
import { Projects } from "../components/Project/Projects";

export default function Home() {
  const [views] = useViews();

  return (
    <div className={styles.container}>
      <Head>
        <title>Suman Biswas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page_container}>
        <HomePage />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
