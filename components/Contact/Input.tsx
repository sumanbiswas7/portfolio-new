import styles from "./Input.module.scss";
import dynamic from "next/dynamic";

interface Props {
  data: any;
  title?: string;
  style?: any;
  className?: any;
}

const Lottie = dynamic(() => import("lottie-react"), {
  suspense: true,
});

export function InputLine({ data, title, className }: Props) {
  return (
    <div className={`${styles.input_box} ${className}`}>
      <Lottie animationData={data} className={styles.icon} />
      <input placeholder={title || ""} className={styles.input} />
    </div>
  );
}

export function InputArea({ data, title, className }: Props) {
  return (
    <div className={`${styles.inputarea_box} ${styles.input_box}`}>
      <Lottie
        animationData={data}
        className={`${styles.icon} ${styles.area_icon}`}
      />
      <textarea placeholder={title || ""} />
    </div>
  );
}
