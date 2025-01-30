"use client";

import styles from "./menu.module.css"
import stadvantages from "@/components/advantagesBlock/block/block.module.css";
import staCap from "@/components/capabilitiesBlock/block/block.module.css";
import staInd from "@/components/industrialRobotsBlock/block/block.module.css";
import staMan from "@/components/manufacturing/block/block.module.css";
import staCon from "@/components/contacts/contacts.module.css";
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";

export default function MobileMenu({enLan}) {
    const [menu, setMenu] = useState(false);

    // useEffect(() => {
    //     if (menu) {
    //         document.body.style.overflowY = "hidden";
    //     } else {
    //         document.body.style.overflowY = "visible";
    //     }
    // }, [menu]);
function sMenu () {
    if (menu) {
        setMenu(false);
        document.body.style.overflowY = "visible";
    } else {
        setMenu(true);
        document.body.style.overflowY = "hidden";
    }
}
    return <>
        <button className={styles.menuBtn} onClick={() => setMenu(!menu)}>
            <svg viewBox="0 0 30 20" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.66667 20C1.19445 20 0.798894 19.84 0.480006 19.52C0.161117 19.2 0.00111686 18.8044 5.74712e-06 18.3333C-0.00110536 17.8622 0.158895 17.4667 0.480006 17.1467C0.801117 16.8267 1.19667 16.6667 1.66667 16.6667H28.3333C28.8055 16.6667 29.2017 16.8267 29.5217 17.1467C29.8417 17.4667 30.0011 17.8622 30 18.3333C29.9989 18.8044 29.8389 19.2005 29.52 19.5217C29.2011 19.8428 28.8055 20.0022 28.3333 20H1.66667ZM1.66667 11.6667C1.19445 11.6667 0.798894 11.5067 0.480006 11.1867C0.161117 10.8667 0.00111686 10.4711 5.74712e-06 10C-0.00110536 9.52888 0.158895 9.13333 0.480006 8.81333C0.801117 8.49333 1.19667 8.33333 1.66667 8.33333H28.3333C28.8055 8.33333 29.2017 8.49333 29.5217 8.81333C29.8417 9.13333 30.0011 9.52888 30 10C29.9989 10.4711 29.8389 10.8672 29.52 11.1883C29.2011 11.5094 28.8055 11.6689 28.3333 11.6667H1.66667ZM1.66667 3.33333C1.19445 3.33333 0.798894 3.17333 0.480006 2.85333C0.161117 2.53333 0.00111686 2.13778 5.74712e-06 1.66667C-0.00110536 1.19556 0.158895 0.8 0.480006 0.48C0.801117 0.16 1.19667 0 1.66667 0H28.3333C28.8055 0 29.2017 0.16 29.5217 0.48C29.8417 0.8 30.0011 1.19556 30 1.66667C29.9989 2.13778 29.8389 2.53389 29.52 2.855C29.2011 3.17611 28.8055 3.33555 28.3333 3.33333H1.66667Z"
                    fill="white"/>
            </svg>
        </button>
        <Portal>
            <div id={styles.menu} className={menu ? styles.active : styles.noActive}>
                <Navigation enLan={enLan} setMenu={setMenu}/>
                <div id={styles.div} className="base_grid">
                    <button className={styles.menuBtn} onClick={() => sMenu()}>
                        <svg viewBox="0 0 30 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path style={{fill: "rgba(62, 69, 108, 1)"}}
                                  d="M1.66667 20C1.19445 20 0.798894 19.84 0.480006 19.52C0.161117 19.2 0.00111686 18.8044 5.74712e-06 18.3333C-0.00110536 17.8622 0.158895 17.4667 0.480006 17.1467C0.801117 16.8267 1.19667 16.6667 1.66667 16.6667H28.3333C28.8055 16.6667 29.2017 16.8267 29.5217 17.1467C29.8417 17.4667 30.0011 17.8622 30 18.3333C29.9989 18.8044 29.8389 19.2005 29.52 19.5217C29.2011 19.8428 28.8055 20.0022 28.3333 20H1.66667ZM1.66667 11.6667C1.19445 11.6667 0.798894 11.5067 0.480006 11.1867C0.161117 10.8667 0.00111686 10.4711 5.74712e-06 10C-0.00110536 9.52888 0.158895 9.13333 0.480006 8.81333C0.801117 8.49333 1.19667 8.33333 1.66667 8.33333H28.3333C28.8055 8.33333 29.2017 8.49333 29.5217 8.81333C29.8417 9.13333 30.0011 9.52888 30 10C29.9989 10.4711 29.8389 10.8672 29.52 11.1883C29.2011 11.5094 28.8055 11.6689 28.3333 11.6667H1.66667ZM1.66667 3.33333C1.19445 3.33333 0.798894 3.17333 0.480006 2.85333C0.161117 2.53333 0.00111686 2.13778 5.74712e-06 1.66667C-0.00110536 1.19556 0.158895 0.8 0.480006 0.48C0.801117 0.16 1.19667 0 1.66667 0H28.3333C28.8055 0 29.2017 0.16 29.5217 0.48C29.8417 0.8 30.0011 1.19556 30 1.66667C29.9989 2.13778 29.8389 2.53389 29.52 2.855C29.2011 3.17611 28.8055 3.33555 28.3333 3.33333H1.66667Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </Portal>
    </>
}

function Navigation({enLan, setMenu}) {
    if (enLan === true) {
        return <nav id={styles.nav}>
            <a href={`#${stadvantages.adv}`} className={styles.a} onClick={() => setMenu(false)}>Advantages</a>
            <br/>

            <a href={`#${staCap.cap}`} className={styles.a} onClick={() => setMenu(false)}>Capabilities</a>
            <br/>

            <a href={`#${staInd.ind}`} className={styles.a} onClick={() => setMenu(false)}>Industrial robots</a>
            <br/>

            <a href={`#${staMan.man}`} className={styles.a} onClick={() => setMenu(false)}>Manufacturing</a>
            <br/>

            <a href={`#${staCon.con}`} className={styles.a} onClick={() => setMenu(false)}>Contacts</a>
        </nav>
    } else {
        return <nav id={styles.nav}>
            <a href={`#${stadvantages.adv}`} className={styles.a} onClick={() => setMenu(false)}>Преимущества</a>
            <br/>

            <a href={`#${staCap.cap}`} className={styles.a} onClick={() => setMenu(false)}>Возможности</a>
            <br/>

            <a href={`#${staInd.ind}`} className={styles.a} onClick={() => setMenu(false)}>Промышленные роботы</a>
            <br/>

            <a href={`#${staMan.man}`} className={styles.a} onClick={() => setMenu(false)}>Производство</a>
            <br/>

            <a href={`#${staCon.con}`} className={styles.a} onClick={() => setMenu(false)}>Контакты</a>
        </nav>
    }
}

const Portal = ({children}) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, [])

    return mounted
        ? createPortal(children,
            document.body)
        : null
}