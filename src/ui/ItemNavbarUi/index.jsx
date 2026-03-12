import styles from "./styles/index.module.css"

export const ItemNavbarUi = ({item}) => {
    return(<div className={styles.item}>
        <item.icon/>
        <p>{item.title}</p>
    </div>)
}