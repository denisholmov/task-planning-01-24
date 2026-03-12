import { Outlet } from "react-router"
import { Header } from "../../components/Header"
import { Navbar } from "../../components/Navbar"

import styles from "./styles/index.module.css"


export const HomePage = () => {
    return(
        <div className={styles.wrapper}>
        
            <div className={styles.header}>
                <Header/>
            </div>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <div className={styles.navbar}>
                <Navbar/>
            </div>
        </div>
    )
}