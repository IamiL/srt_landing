import styles from "./navigation.module.css";
import stadvantages from "../advantagesBlock/block/block.module.css"
import staCap from "../capabilitiesBlock/block/block.module.css"
import staInd from "../industrialRobotsBlock/block/block.module.css"
import staMan from "../manufacturing/block/block.module.css"
import staCon from "../contacts/contacts.module.css"

export default function Navigation({enLan}) {
    console.log("Navigating... - ", enLan);
    if (enLan === true) {
        return <nav id={styles.nav}>
            <a href={`#${stadvantages.adv}`} id={styles.nav1}>Advantages</a>
            <a href={`#${staCap.cap}`} id={styles.nav2}>Capabilities</a>
            <a href={`#${staInd.ind}`} id={styles.nav3}>Industrial robots</a>
            <a href={`#${staMan.man}`} id={styles.nav4}>Manufacturing</a>
            <a href={`#${staCon.con}`} id={styles.nav5}>Contacts</a>
        </nav>
    } else {
        return <nav id={styles.nav}>
            <a href={`#${stadvantages.adv}`} id={styles.nav1}>Преимущества</a>
            <a href={`#${staCap.cap}`} id={styles.nav2}>Возможности</a>
            <a href={`#${staInd.ind}`} id={styles.nav3}>Промышленные роботы</a>
            <a href={`#${staMan.man}`} id={styles.nav4}>Производство</a>
            <a href={`#${staCon.con}`} id={styles.nav5}>Контакты</a>
        </nav>
    }
}