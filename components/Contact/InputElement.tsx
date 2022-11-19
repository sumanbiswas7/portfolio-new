import styles from "./InputElement.module.scss";

interface Props {
  title: string;
  style?: any;
  required?: boolean;
}

export function Input({ title, style, required }: Props) {
  return (
    <div className={styles.input_container}>
      <label> {required ? title + "*" : title} </label>
      <input style={style} placeholder={`Enter your ${title.toLowerCase()}`} />
    </div>
  );
}
