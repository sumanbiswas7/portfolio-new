import React from "react";
import styles from "./InputElement.module.scss";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

interface Props {
  title: string;
  style?: any;
  required?: boolean;
  area?: boolean;
  lottie?: any;
}

export function Input({ title, style, required, area, lottie }: Props) {
  return (
    <div id={area ? styles.area : ""} className={styles.input_container}>
      <div className={styles.label_cont}>
        <Lottie animationData={lottie} className={styles.lottie} />
        <label> {required ? title + "*" : title} </label>
      </div>
      {area ? (
        <textarea
          style={style}
          placeholder={`Enter your ${title.toLowerCase()}`}
        />
      ) : (
        <input
          style={style}
          placeholder={`Enter your ${title.toLowerCase()}`}
        />
      )}
    </div>
  );
}
