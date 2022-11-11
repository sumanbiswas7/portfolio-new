import styles from "./Footer.module.scss";
import { FiChevronsDown } from "react-icons/fi";
import { useRef } from "react";
import useObserver from "../../hooks/useObserver";

interface Props {
  id: number;
  next?: string;
}

export function Footer({ id, next }: Props) {
  const circleRef = useRef<HTMLDivElement>(null);
  const [visible] = useObserver(circleRef);

  return (
    <div className={styles.container}>
      <div className={styles.small_box} id={styles.small_box_1}>
        <div
          ref={circleRef}
          className={styles.circle}
          id={`${visible ? styles.animate : styles.hide}`}
        >
          {id}
        </div>
      </div>
      <div className={styles.small_box} id={styles.small_box_2}>
        {next && <NextArrow />}
      </div>
      <div className={styles.small_box} id={styles.small_box_3}>
        <div className={styles.next_proj_box}>
          {next && (
            <>
              <p>{next}</p>
              <FiChevronsDown />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function NextArrow() {
  return (
    <svg className={styles.arrow} viewBox="0 0 65 39">
      <path d="M36.8833 37.1532L63.1664 10.6812C63.7474 10.1008 64.2086 9.41024 64.5233 8.64942C64.838 7.88861 65 7.07256 65 6.24835C65 5.42415 64.838 4.6081 64.5233 3.84728C64.2086 3.08647 63.7474 2.39594 63.1664 1.81554C62.005 0.652695 60.4338 0 58.7962 0C57.1586 0 55.5874 0.652695 54.426 1.81554L32.4821 23.9172L10.5382 1.81554C9.37672 0.652695 7.8056 0 6.16795 0C4.53031 0 2.9592 0.652695 1.79776 1.81554C1.22325 2.39892 0.768715 3.09079 0.460236 3.85147C0.151749 4.61215 -0.00460815 5.42668 0.000106812 6.24835C-0.00460815 7.07003 0.151749 7.88456 0.460236 8.64524C0.768715 9.40592 1.22325 10.0978 1.79776 10.6812L28.0809 37.1532C28.6572 37.7384 29.3428 38.2029 30.0981 38.5198C30.8535 38.8368 31.6638 39 32.4821 39C33.3004 39 34.1106 38.8368 34.866 38.5198C35.6214 38.2029 36.307 37.7384 36.8833 37.1532Z" />
    </svg>
  );
}
