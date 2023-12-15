import styles from './modalSobre.module.css'
import { TiStar } from "react-icons/ti";
const ModalSobre = ({ nome, avatar, idade, descricao, tipo, imagem, fechar }) => {

    return (
        <div className={styles.fundo}>
         
        
            <div className={styles.container}>
            <button className={styles.botao} onClick={fechar}>X</button>
              <div >
              
                <h2  className={styles.titulo}>{nome}</h2>
                <img className={styles.imagem}  src={imagem} width={200} height={200}/>
                </div>
                <div className={styles.textos}>
             
                <p  >Idade: {idade}</p>
                <p >Descrição:  {descricao}</p>
                <p >Tipo:  {tipo}</p>
                <div className={styles.divAvatar}>
                <p >Avatar: <img src={avatar} width={60} height={60}/></p>
                
                </div>
                </div>
              
            </div>
           
          </div>)}
          export default ModalSobre
