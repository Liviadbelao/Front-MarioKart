import Image from 'next/image';
import styles from './header.module.css';
import { AiFillAliwangwang } from "react-icons/ai";
import Link from 'next/link';
import NavFooter from '../navfooter/NavFooter';
import { TiThMenu } from "react-icons/ti";

const Header = () => {
    return (
        <div className={styles.header}>

            <div className={styles.links}>

                <div className={styles.linksContainer}>
                    <div className={styles.mario}>
                        <img src={"/pagHome/icon-mario.png.png"} width={40} height={40} />
                    </div>
                    <p className={styles.text}>teste</p>
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.mario}>
                        <img src={"/pagHome/icon-mario.png.png"} width={40} height={40} />
                    </div>
                    <NavFooter className={styles.linksNavPages} rota={'/mapasMK'} texto={'Mapa'} />
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.mario}>
                        <img src={"/pagHome/icon-mario.png.png"} width={40} height={40} />
                    </div>
                    <NavFooter className={styles.linksNavPages} rota={'/'} texto={'Cadastro'} />
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.mario}>
                        <img src={"/pagHome/icon-mario.png.png"} width={40} height={40} />
                    </div>
                    <NavFooter className={styles.linksNavPages} rota={'/'} texto={'Sobre Nós'} />
                </div>

            </div>
        </div>
    );
}

export default Header