import styles from "./styles.module.scss";

export function Sobre() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img src="./images/yalesp.svg" />
        </div>
        <div className={styles.textContainer}>
          <h1>Sobre mim</h1>
          <br />
          <p>
            Nordestino, 26 anos. Um apaixonado por tecnologia! <br />
            <br />
            Graduado <span>Engenheiro Mecânico </span>(2020) e
            <span> Bacharel em Ciências e Tecnologia </span>(2018) 
            ambas pela Universidade Federal do Rio Grande do Norte.
            <br />
            <br />
            Implementei meus primeiros projetos com programação ainda na
            universidade com as linguagens <span>C++</span> e <span>Python</span>. E desde então sigo em
            constante evolução desenvolvendo tecnologia. <br />
            <br />
            Hoje atuo como <span>Desenvolvedor de Software Front-End</span> com
            desenvolvimento de aplicações acessíveis, responsivas e
            performáticas para web. Minhas principais stacks são ReactJS,
            NextJS, SASS, Styled-Components, TypeScript, JavaScript, CSS, HTML.
          </p>
        </div>
      </div>
    </section>
  );
}
