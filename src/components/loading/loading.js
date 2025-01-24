import styles from './loading.module.css'
import "./loading.css"
import image from './image.webp'
import image2 from './image.png'
import Image from "next/image";
import Closer from "@/components/loading/closer/closer";

export default function Loading() {
    return <div id="loading">
        <div id={styles.div}>
            <Image src={image} alt="Loading Image" id={styles.img1}/>
            <Image src={image2} alt="Loading Image" id={styles.img2}/>
        </div>
        <Closer/>
    </div>
}