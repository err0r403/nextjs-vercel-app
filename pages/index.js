import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KRIZPO Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">KRIZPO Project!</a>
        </h1>

        <p className={styles.description}>
          Pump and dump with us{' '}
          <code className={styles.code}>is/the/better/choise.js</code>
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Bitcoin data &rarr;</h3>
            <p>Find in-depth information about Bitcoin.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Ethereum data &rarr;</h3>
            <p>Find in-depth information about Ethereum.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Defi data &rarr;</h3>
            <p>Discover projects and information about Defi.</p>
          </a>

          <a
            href="https://github.com/err0r403/nextjs-vercel-app"
            className={styles.card}
          >
            <h3>Bot app &rarr;</h3>
            <p>
              Deploy your bot instantly and bett on the crypto of the moment.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          KRYSPO Team
        </a>
      </footer>
    </div>
  )
}
