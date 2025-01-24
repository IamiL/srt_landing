"use client";
import Image from "next/image";
import image from "./image.png";
import styles from "./additional.module.css"
import {useState} from "react";

export default function Additional({enLan}) {
    const [open, setOpen] = useState(false);

    return <>
        <button id={styles.btn} onClick={() => setOpen(!open)}>
            <span id={styles.span}>
                {enLan ? 'MORE' : 'ПОДРОБНЕЕ'}
            </span>
            <span id={styles.span2}>
                <div className={open ? styles.rotate : styles.div2}>→</div>
            </span>
        </button>
        <div id={styles.div} className={open ? `adli ${styles.ative}` : `adli ${styles.noAtive}`}>
            <Image id={styles.img} src={image} alt="img"/>
        </div>
    </>
}