import styles from "./modal.module.css"
const Modal = ({   nome, imagem, descricao,inspiracao, copa, trofeus, plataforma, fechar }) => {


    return (
      <div >
       
   
          <div className={styles.container}>
            <div >
               <button onClick={fechar}>X</button>
              <h2>{nome}</h2>
              <img  src={imagem} width={200} height={200}/>
              <p >{descricao}</p>
              <p >{inspiracao}</p>
              <p >{copa}</p>
              <p >{trofeus}</p>
              <p >{plataforma}</p>
             
            </div>
          </div>
         
        </div>)}
        export default Modal