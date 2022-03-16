import Head from "next/head";
import styles from './styles.module.scss'

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Yale A. | Sobre</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.sobre}>
          <h1>Sobre mim</h1>
          <p>
            Nordestino, 26 anos e apaixonado por tecnologia. <br/><br/>
            Graduado Bacharel em Ciências e Tecnologia pela Universidade Federal do Rio Grande do
            Norte (2018) e Engenheiro Mecânico (2020) pela mesma instituição. <br/><br/>
            Hoje atuo como engenheiro front-end desenvolvendo aplicações web.
            Experiências de desenvolvimento utilizando as tecnologias React JS,
            Styled Components, Node JS, SASS, HTML, CSS, JavaScript e
            TypeScript.
          </p>
        </div>
      </main>
    </>
  );
}
