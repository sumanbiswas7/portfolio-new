import styles from "./AddressBox.module.scss";
import { GoLocation } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export function AddressBox() {
  return (
    <div className={styles.container}>
      <img src="/contact/splash_img.jpg" className={styles.splash_img} />
      <div>
        <div className={styles.add_box}>
          <Info text="hellosumanbiswas@gmail.com">
            <MdOutlineEmail fill="#fff" />
          </Info>
          <Info text="Tehatta, West Bengal, Nadia India, 741160">
            <GoLocation fill="#fff" />
          </Info>
        </div>
        <div className={styles.links_box}>
          <Link>
            <FaLinkedinIn fill="#333333" size={16} />
          </Link>
          <Link>
            <AiFillInstagram fill="#333333" size={18} />
          </Link>
          <Link>
            <FaFacebookF fill="#333333" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

interface Props {
  children: any;
  text?: string;
}
function Info({ children, text }: Props) {
  return (
    <div className={styles.info_box}>
      {children}
      <span>{text}</span>
    </div>
  );
}

function Link({ children }: Props) {
  return <div className={styles.link_box}>{children}</div>;
}
