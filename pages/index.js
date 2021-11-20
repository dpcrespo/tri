import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      {/* <div>
        <button className={`${styles.btn} ${styles['btn-primary']}`}>Click me!</button>
        <button className={`${styles.btn} ${styles['btn-secondary']}`}>Click me!</button>
        <button className={`${styles.btn} ${styles['btn-primary']}`} disabled>Click Me!</button>
        <button className={`${styles.btn} ${styles['btn-secondary']}`} disabled>Click Me!</button>
      </div > */}
      {/* <div className={`${styles.container} ${styles['right-nav']}`}>
        <div className={styles.sidebar}>
          Sidebar
        </div>
        <div className={styles.main}>
          Main Content
        </div>
      </div> */}
      <input type="range" />
    </div>
  )
}
