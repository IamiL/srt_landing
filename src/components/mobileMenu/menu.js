"use client";

import styles from "./menu.module.css"
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import Link from "next/link";

export default function MobileMenu({enLan}) {
    const [menu, setMenu] = useState(false);

    // useEffect(() => {
    //     if (menu) {
    //         document.body.style.overflowY = "hidden";
    //     } else {
    //         document.body.style.overflowY = "visible";
    //     }
    // }, [menu]);
    function sMenu() {
        if (menu) {
            setMenu(false);
            document.body.style.overflowY = "visible";
        } else {
            setMenu(true);
            document.body.style.overflowY = "hidden";
        }
    }

    return <>
        <div id={styles.btns_sec}>
            <Link id={styles.lan_btn} href={(enLan === true) ? "/" : "/en"}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.4375 12.5C20.7136 12.5 20.9375 12.2761 20.9375 12C20.9375 11.7239 20.7136 11.5 20.4375 11.5V12.5ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5V21.5C17.2467 21.5 21.5 17.2467 21.5 12H20.5ZM12 20.5C7.30558 20.5 3.5 16.6944 3.5 12H2.5C2.5 17.2467 6.75329 21.5 12 21.5V20.5ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5V2.5C6.75329 2.5 2.5 6.75329 2.5 12H3.5ZM12 3.5C16.6944 3.5 20.5 7.30558 20.5 12H21.5C21.5 6.75329 17.2467 2.5 12 2.5V3.5ZM12 20.5C11.6218 20.5 11.222 20.3269 10.8149 19.9333C10.4053 19.5373 10.0136 18.9402 9.67385 18.1636C8.99494 16.6118 8.5625 14.433 8.5625 12H7.5625C7.5625 14.5376 8.0115 16.8588 8.75769 18.5644C9.13046 19.4164 9.58723 20.1373 10.1198 20.6522C10.6548 21.1694 11.2909 21.5 12 21.5V20.5ZM8.5625 12C8.5625 9.567 8.99494 7.38824 9.67385 5.83645C10.0136 5.05981 10.4053 4.4627 10.8149 4.06674C11.222 3.6731 11.6218 3.5 12 3.5V2.5C11.2909 2.5 10.6548 2.83058 10.1198 3.34779C9.58723 3.86268 9.13046 4.58359 8.75769 5.43563C8.0115 7.14119 7.5625 9.46244 7.5625 12H8.5625ZM12 21.5C12.7091 21.5 13.3452 21.1694 13.8802 20.6522C14.4128 20.1373 14.8695 19.4164 15.2423 18.5644C15.9885 16.8588 16.4375 14.5376 16.4375 12H15.4375C15.4375 14.433 15.0051 16.6118 14.3262 18.1636C13.9864 18.9402 13.5947 19.5373 13.1851 19.9333C12.778 20.3269 12.3782 20.5 12 20.5V21.5ZM16.4375 12C16.4375 9.46244 15.9885 7.14119 15.2423 5.43563C14.8695 4.58359 14.4128 3.86268 13.8802 3.34779C13.3452 2.83058 12.7091 2.5 12 2.5V3.5C12.3782 3.5 12.778 3.6731 13.1851 4.06674C13.5947 4.4627 13.9864 5.05981 14.3262 5.83645C15.0051 7.38824 15.4375 9.567 15.4375 12H16.4375ZM3 12.5L20.4375 12.5V11.5L3 11.5L3 12.5Z"
                        fill="white"/>
                </svg>
            </Link>
            <button className={styles.menuBtn} onClick={() => setMenu(!menu)}>
                <svg viewBox="0 0 30 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.66667 20C1.19445 20 0.798894 19.84 0.480006 19.52C0.161117 19.2 0.00111686 18.8044 5.74712e-06 18.3333C-0.00110536 17.8622 0.158895 17.4667 0.480006 17.1467C0.801117 16.8267 1.19667 16.6667 1.66667 16.6667H28.3333C28.8055 16.6667 29.2017 16.8267 29.5217 17.1467C29.8417 17.4667 30.0011 17.8622 30 18.3333C29.9989 18.8044 29.8389 19.2005 29.52 19.5217C29.2011 19.8428 28.8055 20.0022 28.3333 20H1.66667ZM1.66667 11.6667C1.19445 11.6667 0.798894 11.5067 0.480006 11.1867C0.161117 10.8667 0.00111686 10.4711 5.74712e-06 10C-0.00110536 9.52888 0.158895 9.13333 0.480006 8.81333C0.801117 8.49333 1.19667 8.33333 1.66667 8.33333H28.3333C28.8055 8.33333 29.2017 8.49333 29.5217 8.81333C29.8417 9.13333 30.0011 9.52888 30 10C29.9989 10.4711 29.8389 10.8672 29.52 11.1883C29.2011 11.5094 28.8055 11.6689 28.3333 11.6667H1.66667ZM1.66667 3.33333C1.19445 3.33333 0.798894 3.17333 0.480006 2.85333C0.161117 2.53333 0.00111686 2.13778 5.74712e-06 1.66667C-0.00110536 1.19556 0.158895 0.8 0.480006 0.48C0.801117 0.16 1.19667 0 1.66667 0H28.3333C28.8055 0 29.2017 0.16 29.5217 0.48C29.8417 0.8 30.0011 1.19556 30 1.66667C29.9989 2.13778 29.8389 2.53389 29.52 2.855C29.2011 3.17611 28.8055 3.33555 28.3333 3.33333H1.66667Z"
                        fill="white"/>
                </svg>
            </button>
        </div>
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
            <a href={`#advantages`} className={styles.a} onClick={() => setMenu(false)}>Advantages</a>
            <br/>

            <a href={`#capabilities`} className={styles.a} onClick={() => setMenu(false)}>Capabilities</a>
            <br/>

            <a href={`#industrial_robots`} className={styles.a} onClick={() => setMenu(false)}>Industrial robots</a>
            <br/>

            <a href={`#manufacturing`} className={styles.a} onClick={() => setMenu(false)}>Manufacturing</a>
            <br/>

            <a href={`#contacts`} className={styles.a} onClick={() => setMenu(false)}>Contacts</a>
        </nav>
    } else {
        return <nav id={styles.nav}>
            <a href={`#advantages`} className={styles.a} onClick={() => setMenu(false)}>Преимущества</a>
            <br/>

            <a href={`#capabilities`} className={styles.a} onClick={() => setMenu(false)}>Возможности</a>
            <br/>

            <a href={`#industrial_robots`} className={styles.a} onClick={() => setMenu(false)}>Промышленные роботы</a>
            <br/>

            <a href={`#manufacturing`} className={styles.a} onClick={() => setMenu(false)}>Производство</a>
            <br/>

            <a href={`#contacts`} className={styles.a} onClick={() => setMenu(false)}>Контакты</a>
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