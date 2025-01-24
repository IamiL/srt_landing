"use client";
import {useEffect} from "react";

export default function Closer() {

    useEffect(() => {
        // ✅ Define the async function here
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