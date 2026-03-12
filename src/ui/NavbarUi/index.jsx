import { ItemNavbarUi } from "../ItemNavbarUi";

import styles from "./styles/index.module.css"

export const NavbarUi = ({navbarItemsList}) => {
    return(<nav className={styles.navbar}>
        <div className={styles.logo}>
            <ItemNavbarUi item={navbarItemsList[0]}/>
        </div>

        <ul className={styles.list}>
            {navbarItemsList.map(item=>{
                return <li><ItemNavbarUi item={item}/></li>
            })}
        </ul>

        <div className={styles.logout}>
            <ItemNavbarUi item={navbarItemsList[navbarItemsList.length-1]}/>
        </div>
    </nav>);
}


