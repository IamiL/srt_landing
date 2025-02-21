import Robot1 from "@/components/industrialRobotsBlock/robot1/robot1";
import Robot2 from "@/components/industrialRobotsBlock/robot2/robot2";
import Robot3 from "@/components/industrialRobotsBlock/robot3/robot3";
import Robot4 from "@/components/industrialRobotsBlock/robot4/robot4";
import "./block.css"

export default function IndustrialRobotsBlock({enLan}) {
    return <section id="industrial_robots">
        <h2>
            {enLan ? 'Industrial Robotic Arms' : 'Промышленные роботы манипуляторы'}
        </h2>
        <p className="text2">{enLan ? 'We offer a wide range of industrial robotic arms, ensuring their integration into your production process. We provide programming, production of necessary equipment and tooling, and comprehensive technical and software support.' :
            <>Мы предлагаем обширный ассортимент промышленных роботов-<br className="brt1"/>манипуляторов,
                обеспечиваем их
                интеграцию<br className="brt5"/> в
                производственный процесс,<br className="brt1"/> выполняем программирование, изготовление<br
                    className="brt4"/> необходимого
                оборудования и<br className="brt1"/> оснастки,
                а<br className="brt4"/> также предоставляем всестороннюю техническую и<br className="brt1"/> программную
                поддержку.</>}</p>
        <Robot1 enLan={enLan}/>
        <Robot2 enLan={enLan}/>
        <Robot3 enLan={enLan}/>
        <Robot4 enLan={enLan}/>
    </section>
}