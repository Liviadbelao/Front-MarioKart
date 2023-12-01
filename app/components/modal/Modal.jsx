import styles from "./modal.module.css"
const Modal = ({   nome, imagem, descricao,inspiracao, copa, trofeus, plataforma, fechar }) => {


    return (
      <div className={styles.fundo}>
       
       <button className={styles.botao} onClick={fechar}>X</button>
          <div className={styles.container}>
            <div >
               
              <h2  className={styles.titulo}>{nome}</h2>
              <img className={styles.imagem}  src={imagem} width={200} height={200}/>
              </div>
              <div className={styles.textos}>
              <p >Descrição:  {descricao}</p>
              <p >Inspiração:  {inspiracao}</p>
              <p >Copa: {copa}</p>
              <p >Trofeus: {trofeus}</p>
              <p >Plataforma: {plataforma}</p>
              </div>
          
          </div>
         
        </div>)}
        export default Modal