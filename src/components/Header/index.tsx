import styles from "./styles.module.scss";

import { ActiveLink } from "../ActiveLink";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" prefetch>
          <img src="/images/yale.svg" alt="Logotipo" />
        </Link>
        <div className={styles.menuIcon} onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <HiMenu className={styles.icon} />
        </div>
        <nav
          className={menuIsOpen ? styles.menu : ""}
        >
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
