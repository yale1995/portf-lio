import { useState } from "react";
import styles from "./styles.module.scss";
export function Projetos() {
  const [hover, setHover] = useState(false);

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.textContainer}>
        <h1>Projetos</h1>
        <p>
          Confira alguns dos meus principais <span>projetos</span> abaixo:
        </p>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.devfinance}>
          <img src="./images/devFinances.png" />
        </div>
        <div className={styles.dtmoney}>
          <img src="./images/dtmoney.png" />
        </div>
        <div className={styles.ignews}>
          <img src="./images/ignews.png" />
        </div>
        <div className={styles.todo}>
          <img src="./images/to-do.png" />
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button><a href="http://github.com/yale1995">Acessar mais Projetos</a></button>
      </div>
    </section>
  );
}
