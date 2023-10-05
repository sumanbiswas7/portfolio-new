import Link from "next/link";
import styles from "./UsedTechnologies.module.scss";

interface Props {
  technologies: string[];
}

export function UsedTechnologies(technologies: Props) {
  const linksMap = {
    reactnative: "https://reactnative.dev/",
    redux: "https://redux.js.org/",
    react: "https://reactjs.org/",
    cloudinary: "https://cloudinary.com/",
    firebase: "https://firebase.google.com/",
    nextjs: "https://nextjs.org/",
    postgresql: "https://www.postgresql.org/",
    aws: "https://aws.amazon.com",
    awss3: "https://aws.amazon.com/s3/",
    sass: "https://sass-lang.com/",
    graphql: "https://graphql.org/",
    ethereum: "https://ethereum.org/en/",
    solidity: "https://docs.soliditylang.org/en/v0.8.17/",
    nft: "https://en.wikipedia.org/wiki/Non-fungible_token",
    storybook: "https://storybook.js.org/",
    npm: "https://www.npmjs.com/",
    rollup: "https://rollupjs.org/",
    webpack: "https://webpack.js.org/",
    typescript: "https://www.typescriptlang.org/",
    turborepo: "https://turbo.build",
    express: "https://expressjs.com",
    nodejs: "https://nodejs.org",
  };

  return (
    <div className={styles.container}>
      {technologies.technologies.map((tech) => {
        const key = tech.toLowerCase().replaceAll(" ", "");
        const link = linksMap[key as keyof typeof linksMap] || "#";

        return (
          <Link key={tech} href={link} target="_blank">
            <div className={styles.tech}>{tech}</div>
          </Link>
        );
      })}
    </div>
  );
}
