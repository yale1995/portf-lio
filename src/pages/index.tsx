import Head from "next/head";
import { Conhecimentos } from "../components/Conhecimentos";
import { Projetos } from "../components/Projetos";
import { Sobre } from "../components/Sobre";
import {Contato} from '../components/Contato'
import styles from "./home.module.scss";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yale Araújo</title>
      </Head>
      <section className={styles.sectionContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <h1>
              Desenvolvedor
              <br /> de Software<span> Front-End</span>
            </h1>
            <p>Bem vindo ao meu website 👋 </p>
            <button>
              <a href="http://github.com/yale1995">Projetos</a>
            </button>
          </div>
          <div className={styles.imageContainer}>
            <img src="./images/2.svg"></img>
          </div>
        </div>
      </section>
      <Sobre />
      <Projetos />
      <Conhecimentos/>
      <Contato/>
      <Footer/>
    </>
  );
}
