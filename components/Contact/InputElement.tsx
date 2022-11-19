import styles from "./InputElement.module.scss";

interface Props {
  title: string;
  style?: any;
  required?: boolean;
  area?: boolean;
}

export function Input({ title, style, required, area }: Props) {
  return (
    <div id={area ? styles.area : ""} className={styles.input_container}>
      <label> {required ? title + "*" : title} </label>
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
