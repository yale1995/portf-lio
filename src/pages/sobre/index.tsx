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
            Nordestino, 26 anos. Um apaixonado por tecnologia! <br/><br/>
            Graduado Engenheiro Mecânico (2020) e Bacharel em Ciências e Tecnologia (2018) ambas
            pela Universidade Federal do Rio Grande do Norte. <br/><br/>

            Implementei meus primeiros projetos com programação ainda na universidade
            com as linguagens C++ e Python. E desde então sigo em constante evolução desenvolvendo
            tecnologia. <br/><br/>

            Hoje atuo como engenheiro de software front-end com desenvolvimento de aplicações para web
            acessíveis, responsivas e performáticas.

            Minhas principais stacks são ReactJS, NextJS, SASS, Styled-Components, TypeScript, JavaScript, CSS,
            HTML.
          </p>
        </div>
      </main>
    </>
  );
}
