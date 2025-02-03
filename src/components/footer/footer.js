import Image from 'next/image'
import ruLogo from  "./ruLogo.svg"
import enLogo from  "./enLogo.svg"
import styles from './footer.module.css'
import "./footer.css"
import Navigation from "@/components/navigation2/navigation";

export default function Footer({enLan}) {
    return <footer>
        <div id={styles.footer}>
            <div id={styles.logo}><Image src={enLan ? enLogo : ruLogo} alt="footerLogo" /></div>
            <a href="mailto:logistica@povpro.ru">
                logistica@povpro.ru
            </a>
            <Navigation enLan={enLan}/>
        </div>
    </footer>
}