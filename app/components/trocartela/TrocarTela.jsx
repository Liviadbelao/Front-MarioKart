import styles from "./trocartela.module.css"
import Link from "next/link"
const TrocarTela = ({ caminho, texto }) => {

  return (
    <div className={styles.containerMudar}>
      <Link href={caminho}>
        <button className={styles.btn_hibrido}>
          {texto}
        </button>
      </Link>
    </div>
  )
}
export default TrocarTela