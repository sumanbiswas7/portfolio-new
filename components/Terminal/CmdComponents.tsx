import { MY_EMAIL } from "../../utils/email_options";
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
        <span className={styles.col_2}>languages: </span>
        <span className={styles.col_3}>
          <span className={styles.col_4}>&#91;</span>“JavaScript”, “TypeScript”,
          “Python”
          <span className={styles.col_4}>&#93;</span>,
          {/*
           * ---------------
           *      Core
           * ---------------
           */}
          <p className={styles.col_2}>
            core: <span className={styles.col_4}>&#91;</span>
            <span className={styles.col_3}>
              "data-structures", "algorithms"
            </span>
            <span className={styles.col_4}>&#93;</span>
            <span className={styles.col_3}>,</span>
          </p>
          {/* <span>
            <br />
            <span className={styles.col_2}>data-structures: </span>
            "Array", "Linked list", "Stack", "Queue", "Tree", "Heap"
          </span> */}
          {/*
           * ----------------
           *     Frontend
           * ----------------
           */}
          <span>
            <span className={styles.col_2}>frontend: </span>
            <span className={styles.col_4}>&#91;</span>“ReactJS”, “NextJS”,
            “ReactNative”, “HTML”, “Css”, “Scss”,
            <span className={styles.col_4}>&#93;</span>,
          </span>
          {/*
           * ---------------
           *     Backend
           * ---------------
           */}
          <span>
            <br />
            <span className={styles.col_2}>backend && tools: </span>
            <span className={styles.col_4}>&#91;</span>
            “NodeJS”, “GraphQL”, “Prisma”, “Webpack”
            <span className={styles.col_4}>&#93;</span>,
          </span>
          {/*
           * -----------
           *    WEB 3
           * -----------
           */}
          {/* <span>
            <br />
            <span className={styles.col_2}>web3: </span>
            <span className={styles.col_4}>&#91;</span>
            “Solidity”, “Ethereum”<span className={styles.col_4}>&#93;</span>
          </span> */}
          {/*
           * -----------
           *    AWS
           * -----------
           */}
          <span>
            <br />
            <span className={styles.col_2}>aws: </span>
            <span className={styles.col_4}>&#91;</span>
            “EC2”, “Lambda”, “S3”, “RDS”
            <span className={styles.col_4}>&#93;</span>
          </span>
        </span>
      </p>
      <span>&#125;</span>;
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
        skills
      </p>
      <p>
        <span className={styles.col_2}>contact:</span> displays contact info
      </p>
      <p>
        <span className={styles.col_2}>
          to --flag{" "}
          <span className={styles.col_4}>
            (flags:{" "}
            <span className={styles.col_3}>[git, leet, li, ig, fb, yt]</span>)
          </span>
        </span>
        <span className={styles.col_2}>:</span> redirects to specific link
      </p>
      <p>
        <span className={styles.col_2}>
          j --<span className={styles.col_4}>page-section</span>:{" "}
        </span>
        jumps to the given section
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
        <span className={styles.col_2}>email:</span> {MY_EMAIL}
      </p>
      <p>
        <span className={styles.col_4}>instagram</span> (@sumanbiswas7) and
        <span className={styles.col_4}> github</span> (sumanbiswas7)
      </p>
    </div>
  );
}
