import styles from "./styles.module.scss";

import { ActiveLink } from "../ActiveLink";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href='/' prefetch>
          <img src="/images/yale.svg" alt="Logotipo" />
        </Link>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/" prefetch>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/blog" prefetch>
            <a>Blog</a>
          </ActiveLink>
          <ActiveLink
            activeClassName={styles.active}
            href="http://linkedin.com/in/yalearaujo"
            prefetch
          >
            <a>
              <FaLinkedinIn />
            </a>
          </ActiveLink>
          <ActiveLink
            activeClassName={styles.active}
            href="http://github.com/yale1995"
            prefetch
          >
            <a>
              <FaGithub />
            </a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
