import styles from "./AddressBox.module.scss";
import { GoLocation } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";

export function AddressBox() {
  return (
    <div className={styles.container}>
      <img src="/contact/splash_img.jpg" className={styles.splash_img} />
      <div>
        <Info text="hellosumanbiswas@gmail.com">
          <MdOutlineEmail fill="#fff" />
        </Info>
        <Info text="Tehatta, West Bengal, Nadia India, 741160">
          <GoLocation fill="#fff" />
        </Info>
      </div>
    </div>
  );
}

interface Props {
  children: any;
  text: string;
}
function Info({ children, text }: Props) {
  return (
    <div className={styles.info_box}>
      {children}
      <span>{text}</span>
    </div>
  );
}
