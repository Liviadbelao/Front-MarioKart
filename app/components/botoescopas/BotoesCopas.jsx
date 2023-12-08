import styles from "./botoescopa.module.css"
const BotoesCopas = ({ imagem, oc, copaSelecionada, aplicarFiltro}) => {

  return (
    <p>
                        <button className={`${styles.botoes} ${copaSelecionada === oc ? styles.botoesSelecionado : ''}`} onClick={() => aplicarFiltro(oc)}>
                            <img className={styles.imagecup} src={imagem} width={150} height={150} />
                        </button>
    </p>
)
}
export default BotoesCopas