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
            <span className={styles.col_2}>data-structures:</span> "Array",
            "Linked list", "Stack", "Queue", "Tree", "Heap"
          </span>
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
        <span className={styles.col_2}>about:</span> gets info about suman
      </p>
      <p>
        <span className={styles.col_2}>skills:</span> displays all technical
        skill suman has
      </p>
      <p>
        <span className={styles.col_2}>contact:</span> displays contact info
      </p>
      <p>
        <span className={styles.col_2}>
          to --flag{" "}
          <span className={styles.col_4}>
            (flags: [git, leet, li, ig, fb, yt]):{" "}
          </span>
        </span>
        redirects to specific link
      </p>
      <p>
        <span className={styles.col_2}>
          clear <span className={styles.col_4}>or</span> cls:
        </span>{" "}
        clears the output console
      </p>
      <p>
        <span className={styles.col_2}>exit:</span> redirects to home page
      </p>
    </div>
  );
}

export function AboutCmd() {
  return (
    <div className={styles.about_cmd}>
      <p className={styles.skills_head}>
        <span className={styles.col_0}>~</span> about suman
      </p>
      <p>
        currently a <span className={styles.col_4}>student</span>, learning and
        developing new skills. fuelled by a passion for making cool websites and
        applications. proficient in technologies like ReactJS, NextJS. some of
        my hobbies are playing football, photography, and traveling.
      </p>
    </div>
  );
}

export function ErrorCmd() {
  return (
    <p className={styles.error_cmd}>
      <span className={styles.col_4}>Error: </span>
      Command not recognized
    </p>
  );
}

export function ContactCmd() {
  return (
    <div className={styles.contact_cmd}>
      <p className={styles.skills_head}>
        <span className={styles.col_0}>~</span> contact info
      </p>
      <p>
        <span className={styles.col_2}>email:</span> hellosumanbiswas@gmail.com
      </p>
      <p>
        <span className={styles.col_4}>instagram</span> (@sumanbiswas7) and
        <span className={styles.col_4}> github</span> (sumanbiswas7)
      </p>
    </div>
  );
}
