import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import {TiThMenu} from 'react-icons/ti'
import {IoCloseSharp} from 'react-icons/io5'

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)




  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/yale.svg" alt="Logotipo"></img>
        <label className={styles.btn} onClick={() => setMenuIsOpen(!menuIsOpen)}>{menuIsOpen? <IoCloseSharp/> : <TiThMenu />}</label>
        <nav onClick={() => setMenuIsOpen(false)} className={menuIsOpen ? styles.menu : ''}>
          <ActiveLink activeClassName={styles.active} href="/" prefetch>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/sobre" prefetch>
            <a>Sobre</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/projetos" prefetch>
            <a>Projetos</a>
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
