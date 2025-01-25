import "../globals.css";
import localFont from 'next/font/local'
import Background from "@/components/background/background";
import Loading from "@/components/loading/loading";



export default function EnLayout({children}) {
    return (
        <>
        {children}
        </>
    );
}
