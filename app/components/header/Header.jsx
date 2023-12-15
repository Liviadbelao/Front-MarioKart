import styles from './header.module.css';
import NavFooter from '../navfooter/NavFooter';

const Header = () => {
    return (



        <div className={styles.header}>

            <div className={styles.links}>



                <div className={styles.img}>
                    <img src={"/membros/74d4f295-8121-4959-b08a-04508f938c2a.png"} width={200} height={100} />
                </div>
                <div className={styles.linksContainer}>

                    <div className={styles.linkagem}>
                        <NavFooter className={styles.linksNavPages} rota={'/'} texto={'Home'} />
                    </div>

                    <div className={styles.linkagem}>
                        <NavFooter className={styles.linksNavPages} rota={'/sobrenos'} texto={'Equipe'} />
                    </div>

                    <div className={styles.linkagem}>
                        <NavFooter className={styles.linksNavPages} rota={'/mapasMK'} texto={'Mapa'} />
                    </div>

                    <div className={styles.linkagem}>
                        <NavFooter className={styles.linksNavPages} rota={'/contato'} texto={'Contato'} />
                    </div>

                </div>
            </div>
        </div>
    );

}

export default Header