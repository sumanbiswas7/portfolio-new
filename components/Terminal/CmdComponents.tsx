import styles from "./CmdComponents.module.scss";

export function SkillsCmd() {
  return (
    <div className={styles.help_box}>
      <p className={styles.skills_head}>
        <span className={styles.col_0}>~</span> skills
      </p>
      <span className={styles.col_1}>tech</span>
      <span>: &#123;</span>
      <p className={styles.skills_content}>
        <span className={styles.col_2}>languages:</span>
        <span className={styles.col_3}>
          “JavaScript”, “TypeScript”, “Python”
          <span>
            <br />
            <span className={styles.col_2}>frontend:</span> “ReactJS”, “NextJS”,
            “ReactNative”, “HTML”, “Css”,
          </span>
          <span>
            <br />
            <span className={styles.col_2}>backend && tools:</span>
            “NodeJS”, “GraphQL”, “Prisma”, “Sass”,
          </span>
          <span>
            <br />
            <span className={styles.col_2}>web3:</span>
            “Solidity”, “Ethereum”
          </span>
        </span>
      </p>
      <span>&#125;</span>
    </div>
  );
}

export function TypeHelp() {
  return (
    <p className={styles.typehelp}>
      type <span>`help`</span> to get command list
    </p>
  );
}
export function HelpCmd() {}
