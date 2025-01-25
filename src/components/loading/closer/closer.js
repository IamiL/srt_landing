"use client";
import {useEffect} from "react";

export default function Closer() {

    useEffect(() => {
        async function St() {
            document.body.style.overflowY = "hidden";

            setTimeout(() => {
                document.getElementById("loading").style.display = "none"
                document.body.style.overflowY = "visible";
            }, 2000)
        }

        St();

    }, []);


    return <></>
}