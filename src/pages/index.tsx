import Head from "next/head";
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <title>Yale A. | Home</title>   
    </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <h1><span>Front-End</span> Software Engineer</h1>
        <p>Seja bem vindo ao meu website.</p>
      </section>
    </main>
    </>
  )
}