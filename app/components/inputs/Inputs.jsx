import styles from "./inputs.module.css"

const Inputs = ({ tipo, valor, pl, oc}) => {

  return (
    <div className={styles.containerInputs}>
    <input type={tipo} value={valor} placeholder={pl} onChange={oc} className={styles.Inputs} />
    </div>
)
}
export default Inputs