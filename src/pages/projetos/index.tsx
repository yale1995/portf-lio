import Head from "next/head";
import styles from "./styles.module.scss";

export default function Projetos() {
  return (
    <>
      <Head>
        <title>Yale A. | Projetos</title>
      </Head>
      <main className={styles.container}>
      <h1>Meus projetos</h1>
        <div className={styles.content}>
          <img src="/images/ignews.png" alt="pagina de site" />
          <div>
            <h2>Ignews - Conteúdo digital para assinantes</h2>
            <p>
              Aplicação para venda de conteúdo digital por assinatura. Com Ignews seus clientes
              poderão comprar pacotes de assinatura diretamente pelo site. A aplicação conta
              com sistema de autenticação para usuários.
            </p>
            <a href='https://github.com/yale1995/ignews'>Ver no reposiório</a>
          </div>
        </div>
        <div className={styles.content}>
          <img src="/images/dtmoney.png" alt="pagina de site" />
          <div>
            <h2>dt money - Controle de finanças</h2>
            <p>
              Aplicação para venda de conteúdo digital por assinatura. Com Ignews seus clientes
              poderão comprar pacotes de assinatura diretamente pelo site. A aplicação conta
              com sistema de autenticação para usuários.
            </p>
            <a href='https://github.com/yale1995/dt-money'>Ver no reposiório</a>
          </div>
        </div>
        <div className={styles.content}>
          <img src="/images/to-do.png" alt="pagina de site" />
          <div>
            <h2>To-do List - Gestão de atividades</h2>
            <p>
              Aplicação para venda de conteúdo digital por assinatura. Com Ignews seus clientes
              poderão comprar pacotes de assinatura diretamente pelo site. A aplicação conta
              com sistema de autenticação para usuários.
            </p>
            <a href='https://github.com/yale1995/To-do-list'>Ver no reposiório</a>
          </div>
        </div>
        <div className={styles.content}>
          <img src="/images/devFinances.png" alt="Aplicativo dev finances" />
          <div>
            <h2>dev finance$ - Controle de finanças</h2>
            <p>
              Aplicação para venda de conteúdo digital por assinatura. Com Ignews seus clientes
              poderão comprar pacotes de assinatura diretamente pelo site. A aplicação conta
              com sistema de autenticação para usuários.
            </p>
            <a href='https://github.com/yale1995/dev.finances'>Ver no reposiório</a>
          </div>
        </div>
      </main>
    </>
  );
}
