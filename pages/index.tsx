import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { About } from "../components/About/About";
import { HomePage } from "../components/Home/HomePage";
import { Projects } from "../components/Project/Projects";
import dynamic from "next/dynamic";
import { Terminal } from "../components/Terminal/Terminal";
const ContactNoSSR = dynamic(() => import("../components/Contact/Contact"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Suman Biswas</title>
        <meta
          name="description"
          content="This is portfolio website of Suman Biswas who is a student and a developer"
        />
        <link
          rel="icon"
          href="/favicon-white.svg"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon.svg"
          media="(prefers-color-scheme: light)"
        />
      </Head>

      <div className={styles.page_container}>
        <HomePage />
        <About />
        <Terminal skillsPage />
        <Projects />
        <ContactNoSSR />
      </div>
    </div>
  );
}
