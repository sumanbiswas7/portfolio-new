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
    awss3: "https://aws.amazon.com/s3/",
    sass: "https://sass-lang.com/",
    graphql: "https://graphql.org/",
  };

  return (
    <div className={styles.container}>
      {technologies.technologies.map((tech) => {
        const key = tech.toLowerCase().replaceAll(" ", "");
        const link = linksMap[key as keyof typeof linksMap] || "#";

        return (
          <Link href={link} target="_blank">
            <div className={styles.tech}>{tech}</div>
          </Link>
        );
      })}
    </div>
  );
}
