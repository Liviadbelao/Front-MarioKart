import Image from 'next/image';
import styles from './header.module.css';
import { AiFillAliwangwang } from "react-icons/ai";
import Link from 'next/link';
import NavFooter from '../navfooter/NavFooter';
import { TiThMenu } from "react-icons/ti";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.menu}>
            <TiThMenu />
            </div>
            <div className={styles.links}>

                <div className={styles.linksContainer}>
                    <div className={styles.mario}>
                        <img src={"/icon-mario.png.png"} width={30} height={30} />
                    </div>
                    <NavFooter className={styles.linksNavPages} rota={'/'} texto={'Home'} />
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.mario}>
                    </div>
                    <NavFooter className={styles.linksNavPages} rota={'/mapasMK'} texto={'Mapa'} />
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.mario}>
                        <img src={"/icon-mario.png.png"} width={30} height={30} />
                    </div>
                    <NavFooter className={styles.linksNavPages} rota={'/'} texto={'Cadastro'} />
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.mario}>
                        <img src={"/icon-mario.png.png"} width={30} height={30} />
                    </div>
                    <NavFooter className={styles.linksNavPages} rota={'/'} texto={'Sobre Nós'} />
                </div>

            </div>
        </div>
    );
}

export default Header