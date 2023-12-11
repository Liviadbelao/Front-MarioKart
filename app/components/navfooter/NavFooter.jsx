import styles from '../navfooter/navfooter.module.css'

const NavFooter = ({ rota, texto}) => {
    return (
        
        <div>
            <a className={styles.texto} href={rota}>{texto}</a>
        </div>
    );

}
export default NavFooter