import styles from "./label.module.css"

const Label = ({ htmlFor, texto }) => {

  return (
    <label className={styles.label} htmlFor={htmlFor}>{texto}</label>
  )
}
export default Label