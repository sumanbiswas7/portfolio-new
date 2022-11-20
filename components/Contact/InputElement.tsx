import React, { useRef } from "react";
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
  forwardedRef?: React.LegacyRef<HTMLInputElement>;
  forwardedAreaRef?: React.LegacyRef<HTMLTextAreaElement>;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  title,
  style,
  required,
  area,
  lottie,
  forwardedRef,
  forwardedAreaRef,
}: Props) {
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
          ref={forwardedAreaRef}
        />
      ) : (
        <input
          ref={forwardedRef}
          style={style}
          placeholder={`Enter your ${title.toLowerCase()}`}
        />
      )}
    </div>
  );
}
