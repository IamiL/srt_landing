import styles from './header.module.css'
import Link from "next/link";
import Navigation from "../navigation/navigation";
import "./header.css"
import MobileMenu from "@/components/mobileMenu/menu";
import Logo from "@/components/logo/logo";

export default function Header({enLan}) {
    return <header id={styles.header} className="base_grid">
        <div id={styles.logo}>
            <Logo enLan={enLan}/>
        </div>
        <Navigation enLan={enLan}/>
        <MobileMenu enLan={enLan}/>
    </header>
}