import styles from "./buttonAmarelo.module.css"

const buttonAmarelo = ({ type, texto }) => {

  return (
  <button type={type} className={styles.button}>{texto}</button>
  )
}
export default buttonAmarelo