import styles from './header.module.css';
import NavFooter from '../navfooter/NavFooter';

const Header = () => {
    return (

        <div>
        <img src={"/membros/c03790eb-7c50-4196-9b8e-20fccae209af.jpg"}  height={60} className={styles.caixinha} />


        <div className={styles.header}>

            <div className={styles.links}>


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
                    <NavFooter className={styles.linksNavPages} rota={'/mapasMK/cadastro'} texto={'Cadastro'} />
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.mario}>
                        <img src={"/pagHome/icon-mario.png.png"} width={40} height={40} />
                    </div>
                    <NavFooter className={styles.linksNavPages} rota={'/sobrenos'} texto={'Sobre Nós'} />
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.mario}>
                        <img src={"/pagHome/icon-mario.png.png"} width={40} height={40} />
                    </div>
                    <NavFooter className={styles.linksNavPages} rota={'/contato'} texto={'Contato'} />
                </div>

            </div>
        </div>
        </div>
    );
}

export default Header