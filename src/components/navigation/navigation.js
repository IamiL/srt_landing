import styles from "./navigation.module.css";

export default function Navigation({enLan}) {
    if (enLan === true) {
        return <nav id={styles.nav}>
            <a href={`#advantages`} id={styles.nav1}>Advantages</a>
            <a href={`#capabilities`} id={styles.nav2}>Capabilities</a>
            <a href={`#industrial_robots`} id={styles.nav3}><span id={styles.rob1}>Industrial robots</span><span
                id={styles.rob2}>Robots</span></a>
            <a href={`#manufacturing`} id={styles.nav4}>Manufacturing</a>
            <a href={`#contacts`} id={styles.nav5}>Contacts</a>
        </nav>
    } else {
        return <nav id={styles.nav}>
            <a href={`#advantages`} id={styles.nav1}>Преимущества</a>
            <a href={`#capabilities`} id={styles.nav2}>Возможности</a>
            <a href={`#industrial_robots`} id={styles.nav3}><span id={styles.rob1}>Промышленные роботы</span><span
                id={styles.rob2}>Роботы</span></a>
            <a href={`#manufacturing`} id={styles.nav4}>Производство</a>
            <a href={`#contacts`} id={styles.nav5}>Контакты</a>
        </nav>
    }
}