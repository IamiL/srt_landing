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
                <div className={open ? styles.rotate : styles.div2}>
<svg id="a" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.38 16.97">
  <polygon points="8.49 1.41 14.56 7.49 0 7.49 0 9.49 14.56 9.49 8.49 15.56 9.9 16.97 18.38 8.49 9.9 0 8.49 1.41"
           fill="#fff"/>
</svg>
                </div>
            </span>
        </button>
        <div id={styles.div} className={open ? `adli ${styles.ative}` : `adli ${styles.noAtive}`}>
            <Image id={styles.img} src={image} alt="img"/>
        </div>
    </>
}