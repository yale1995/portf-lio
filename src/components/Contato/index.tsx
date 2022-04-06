import styles from "./styles.module.scss";

import { FiMail } from "react-icons/fi";

export function Contato() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1>
            Precisando dos meus <br /> serviços?
          </h1>
          <p>
            Entre em contato para <br /> podermos conversar :)
          </p>
          <p className={styles.textIcon}>
            <span>
              <FiMail  />
            </span>
            yale850@gmail.com
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src="./images/contact.svg" />
        </div>
      </div>
    </section>
  );
}
