import Link from "next/link";
import Logo from "@/components/logo/logo";

export default function NotFoundPage() {
    return <html lang="ru">
    <body style={{overflowY: "hidden", backgroundColor: "#3e456c", animationName: "none"}} id="not_found">
    <div id="not_found_logo">
        <Logo enLan={false}/>
    </div>
    <h1
        id="not_found_heading">Страница
        не
        найдена / Page not
        found</h1>
    <Link href={"/"} id="not_found_link">На главную / Main page</Link>
    </body>
    </html>
}