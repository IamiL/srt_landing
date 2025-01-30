import FirstBlock from "@/components/firstBlock/block/block";
import AdvantagesBlock from "@/components/advantagesBlock/block/block";
import CapabilitiesBlock from "@/components/capabilitiesBlock/block/block";
import IndustrialRobotsBlock from "@/components/industrialRobotsBlock/block/block";
import ManufacturingBlock from "@/components/manufacturing/block/block";
import AutomationOfTechnologicalProcesses
    from "@/components/automationOfTechnologicalProcesses/automationOfTechnologicalProcesses";
import EquipmentModernization from "@/components/equipmentModernization/block/equipmentModernization";
import Contacts from "@/components/contacts/contacts";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Loading from "@/components/loading/loading";
import Background from "@/components/background/background";
import localFont from "next/font/local";

export const metadata = {
    title: 'IRT — robotic technologies',
    description: 'We offer an extensive range of industrial robot manipulators, ensure their integration into the production process, perform programming, manufacture the necessary equipment and tooling, and provide comprehensive technical and software support.',
    // viewport: 'width=device-width, initial-scale=1'
}
const ablation = localFont({src: '../AblationBold.otf', variable: '--font-ablation'})
const ablation2 = localFont({src: '../AblationBlack.otf', variable: '--font-ablation2'})
const sfPro = localFont({src: '../SF-Pro-Display-Light.otf', variable: '--font-sfPro'})
const inter = localFont({src: '../Inter.ttf', variable: '--font-inter'})
export default function Home() {
    return (
        <html lang="en" className={`${inter.variable} ${ablation.variable} ${ablation2.variable} ${sfPro.variable}`}>
        <body style={{overflowY: "hidden"}}>
        <Loading/>
        <Header enLan={true}/>
            <main>
                <FirstBlock enLan={true}/>
                <AdvantagesBlock enLan={true}/>
                <CapabilitiesBlock enLan={true}/>
                <IndustrialRobotsBlock enLan={true}/>
                <ManufacturingBlock enLan={true}/>
                <AutomationOfTechnologicalProcesses enLan={true}/>
                <EquipmentModernization enLan={true}/>
                <Contacts enLan={true}/>
            </main>
            <Footer enLan={true}/>
        <Background/>
        </body>
        </html>
    );
}
