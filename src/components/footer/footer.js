import Image from 'next/image'
import enLogo from './enLogo.png'
import ruLogo from './ruLogo.png'
import styles from './footer.module.css'
import "./footer.css"
import Navigation from "@/components/navigation2/navigation";

export default function Footer({enLan}) {
    return <footer>
        <div id={styles.footer}>
            <div id={styles.logo}><Image src={(enLan === true) ? enLogo : ruLogo} alt="logo"/></div>
            <a href="mailto:logistica@povpro.ru">
                logistica@povpro.ru
            </a>
            <Navigation enLan={enLan}/>
        </div>
    </footer>
}