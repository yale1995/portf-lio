import styles from "./styles.module.scss";

import { SiNextdotjs, SiGithub } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";

export function Conhecimentos() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.textContainer}>
        <h1>Conhecimentos</h1>
      </div>
      <div className={styles.contentContainer}>
        <div>
          <div>
            <img src="./images/typescript.svg" />
          </div>
          <div>TypeScript</div>
        </div>
        <div>
          <div>
            <img src="./images/react-2.svg" />
          </div>
          <div>ReactJS</div>
        </div>
        <div>
          <div>
            <img src="./images/sass-1.svg" />
          </div>
          <div>SASS</div>
        </div>
        <div>
          <div>
            <img src="./images/html-1.svg" />
          </div>
          <div>HTML</div>
        </div>
        <div>
          <div>
            <img src="./images/css-3.svg" />
          </div>
          <div>CSS</div>
        </div>
        <div>
          <div>
            <img src="./images/logo-javascript.svg" />
          </div>
          <div>JavaScript</div>
        </div>
        <div>
          <div>
            <img src="./images/styled-components-1.svg" />
          </div>
          <div>Styled-Components</div>
        </div>
        <div>
          <div>
            <img src="./images/next-js.svg" />
          </div>
          <div>NextJS</div>
        </div>
        <div>
          <div>
            <img src="./images/git-icon.svg" />
          </div>
          <div>Git/Github</div>
        </div>
      </div>
    </section>
  );
}
