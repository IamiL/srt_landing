import "./globals.css";
import localFont from 'next/font/local'
import Background from "@/components/background/background";
import Loading from "@/components/loading/loading";

export const metadata = {
    title: 'SRT',
    description: 'Smart Robotic Technologies',
    // viewport: 'width=device-width, initial-scale=1'
}

// const inter = Inter({
//     variable: '--font-inter',
//     subsets: ['cyrillic']
// })
const ablation = localFont({src: './AblationBold.otf', variable: '--font-ablation'})
const ablation2 = localFont({src: './AblationBlack.otf', variable: '--font-ablation2'})
const sfPro = localFont({src: './SF-Pro-Display-Light.otf', variable: '--font-sfPro'})
const inter = localFont({src: './Inter.ttf', variable: '--font-inter'})

export default function RootLayout({children}) {
    return (
        <html lang="en" className={`${inter.variable} ${ablation.variable} ${ablation2.variable} ${sfPro.variable}`}>
        <body>
        <Loading/>
        {children}
        <Background/>
        </body>
        </html>
    );
}
