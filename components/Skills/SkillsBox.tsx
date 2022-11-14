import styles from "./SkillsBox.module.scss";

interface Props {
  tech: string[];
  category: string;
}

export function SkillsBox({ tech, category }: Props) {
  return (
    <div className={styles.container}>
      <p>{category}</p>
      <ul>
        {tech.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
}
