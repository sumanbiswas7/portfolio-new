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
export function HelpCmd() {
  return (
    <div className={styles.help_cmd}>
      <p className={styles.skills_head}>
        <span className={styles.col_0}>~</span> command list
      </p>
      <p>
        <span className={styles.col_2}>about:</span> get info about suman
      </p>
      <p>
        <span className={styles.col_2}>skills:</span> get all skills he has
      </p>
      <p>
        <span className={styles.col_2}>contact:</span> displays contact info
      </p>
      <p>
        <span className={styles.col_2}>
          to --li <span className={styles.col_4}>or</span> to --ig{" "}
          <span className={styles.col_4}>or</span> to --fb:
        </span>{" "}
        redirects to linkedin, insta, fb
      </p>
    </div>
  );
}
