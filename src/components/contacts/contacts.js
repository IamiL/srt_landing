import styles from './contacts.module.css';

export default function Contacts({enLan}) {
    return <section id={styles.con}>
        <h2>
            {enLan ? 'Join Us!' :
                'Присоединяйтесь к нам!'}
        </h2>
        <div>
            <p className="text2" id={styles.text2}>
                {enLan ? 'We offer opportunities for specialists eager to grow and develop in digital technologies. Regardless of your location, if you have the knowledge and ambition, we’d be delighted to have you on our team. We provide opportunities for training, development, and competitive compensation.' :
                    <>
                        Мы предлагаем сотрудничество<br className="brt4"/> специалистам, которые<br
                        className="brt5"/> хотят<br
                        className="brt1"/> расти и<br className="brt4"/> развиваться в области
                        цифровых<br className="brt5"/> технологий.
                        Если у<br className="brt1"/> вас есть знания и амбиции,<br className="brt4"/> независимо<br
                        className="brt5"/> от
                        вашего<br
                        className="brt1"/> местоположения,
                        мы
                        будем
                        рады видеть вас в нашей<br className="brt1"/> команде. Мы предлагаем возможности для<br
                        className="brt5"/> обучения,<br
                        className="brt6"/> развития
                        и достойного
                        заработка.
                    </>}
                <br/>
                <br/>

                {enLan ? ' We are open to collaborating with regional companies to implement projects and solve pressing local challenges.' :
                    <> Мы готовы к сотрудничеству с<br className="brt4"/> региональными<br className="brt5"/> компаниями<br
                        className="brt1"/> для
                        реализации проектов и
                        решения<br className="brt5"/> актуальных
                        задач<br className="brt4"/> на<br className="brt1"/> местах.
                    </>}
            </p>
            <div id={styles.contacts_list}>
                <h3>
                    {enLan ? 'Contacts' : 'Контакты'}
                </h3>


                <br/>
                <br/>
                <a href="mailto:logistica@povpro.ru">
                    logistica@povpro.ru
                </a>
                <a href="tel:+79376642950">
                    +7 (937) 664-29-50
                </a>
            </div>
        </div>
    </section>
}