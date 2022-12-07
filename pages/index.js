import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Panel</title>
        <meta name="admin panel" content="Basic Admin Panel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>Home</h1>
      <main className={styles.main}>
      </main>
    </div>
  )
}
