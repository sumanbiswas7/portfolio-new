import Link from "next/link";
import useObserver from "../../hooks/useObserver";
import styles from "./MyDescription.module.scss";
import { useRef } from "react";

export function MyDescription() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible] = useObserver(containerRef);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      id={`${visible ? styles.animate : styles.hide}`}
    >
      <h1 className={styles.h1_large_screen}>
        Suman <br /> Biswas.
      </h1>
      <h1 className={styles.h1_small_screen}>Suman Biswas</h1>
      <p>
        Student, FullStack Developer <br />
      </p>
      <div>
        <button>
          <Link href="/contact" target="_blank">
            hire me
          </Link>
        </button>
        <button>
          <Link
            href="https://sumanbiswas-website.s3.ap-south-1.amazonaws.com/Suman+Biswas.pdf"
            target="_blank"
          >
            resume
          </Link>
        </button>
      </div>
    </div>
  );
}
