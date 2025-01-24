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

export default function Home() {
    return (
        <>
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
        </>
    );
}
