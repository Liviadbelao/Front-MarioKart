import styles from './modalSobre.module.css'

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
                <p >idade: {idade}</p>
                <p >Descrição:  {descricao}</p>
                <p >tipo:  {tipo}</p>
                <p >avatar: {avatar}</p>
            
                </div>
              
            </div>
           
          </div>)}
          export default ModalSobre
