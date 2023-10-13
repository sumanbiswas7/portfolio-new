import Link from "next/link";
import styles from "./ProjectCard.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";

export function ProjectCard({ description, img, title, color, id }: Props) {
  const [hover, setHover] = useState(false);

  // let isMobile = /iPhone|iPad|iPod|Android/i.test(window?.navigator?.userAgent);
  const isMobile = false;

  const mobStyles = {
    background: `linear-gradient(180deg, ${color} 0%, #404040 100%)`,
  };
  const normalStyles = {
    background: hover
      ? `linear-gradient(180deg, ${color} 0%, #404040 100%)`
      : "",
  };

  return (
    <Link href={`/projects/${id}`}>
      <div
        className={styles.container}
        style={isMobile ? mobStyles : normalStyles}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={styles.top_cont_margin}>
          <div className={styles.top_row}>
            <div className={styles.title_tag_cont}>
              <h4>{title}</h4>
              {/* <Tags tags={["React", "Next", "Cloudinary"]} /> */}
            </div>
            <BsArrowRight size={20} id="icon-right-arrow" />
          </div>
          <p>{description}</p>
        </div>
        <img src={img} alt={title} className={styles.cover_img} />

        <div className={styles.bottom_blur} />
      </div>
    </Link>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className={styles.tags_cont}>
      {tags.map((tag) => (
        <div className={styles.tag}>{tag}</div>
      ))}
    </div>
  );
}

interface Props {
  title: string;
  description: string;
  img: string;
  color: string;
  id: number;
}
