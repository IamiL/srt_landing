import styles from './loading.module.css'
import "./loading.css"
import image from './image.webp'
import Image from "next/image";
import Closer from "@/components/loading/closer/closer";

export default function Loading() {
    return <div id="loading">
        <div id={styles.div}>
            <Image src={image} alt="Loading Image"/>
        </div>
        <Closer/>
    </div>
}