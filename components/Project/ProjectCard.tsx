import styles from "./ProjectCard.module.scss";
import { BsArrowRight } from "react-icons/bs";

export function ProjectCard({ description, img, title }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.top_cont_margin}>
        <div className={styles.top_row}>
          <div className={styles.title_tag_cont}>
            <h4>Cinematic</h4>
            {/* <span>Tag</span> */}
          </div>
          <BsArrowRight size={20} />
        </div>
        <p>
          A platform that provides movie lovers with an immersive experience to
          discover movies
        </p>
      </div>
      <img src="/project/cinematic-cover.png" className={styles.cover_img} />

      <div className={styles.bottom_blur} />
    </div>
  );
}

interface Props {
  title: string;
  description: string;
  img: string;
}
