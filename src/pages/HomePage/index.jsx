import styles from "./styles/index.module.css"

export const HomePage = () => {
    return(
        <div className={styles.wrapper}>
        
        <header className={styles.header}>header</header>
        <main className={styles.main}>
            <section>section</section>
        </main>
        <aside className={styles.navbar}>sidebar</aside>
        </div>
    )
}