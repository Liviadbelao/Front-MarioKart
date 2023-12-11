import styles from '../navfooter/navfooter.module.css'

const NavFooter = ({ rota, icon}) => {
    return (
        
        <div>
            <a className={styles.texto} href={rota}>{icon}</a>
        </div>
    );

}
export default NavFooter