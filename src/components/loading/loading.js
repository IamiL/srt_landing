import styles from './loading.module.css'
import "./loading.css"
import Closer from "@/components/loading/closer/closer";

export default function Loading() {
    return <div id="loading">
        <div id={styles.div}>
            <video loop height="100%" autoPlay muted id="video">
                <source src="/backvideo.mp4"
                        type='video/mp4'/>
            </video>
        </div>
        <Closer/>
    </div>
}