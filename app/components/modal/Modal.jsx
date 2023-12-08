import styles from "./modal.module.css"
const Modal = ({   nome, imagem, descricao,inspiracao, copa, trofeus, plataforma, fechar, edt, dlt }) => {


    return (
      <div className={styles.fundo}>
       
       <img className={styles.mario} src={"http://vignette2.wikia.nocookie.net/wiki-mario-kart-pc/images/7/75/Mario.png/revision/latest?cb=20161130004625&path-prefix=fr"}></img>
          <div className={styles.container}>
          <button className={styles.botao} onClick={fechar}>X</button>
            <div >
            
              <h2  className={styles.titulo}>{nome}</h2>
              <img className={styles.imagem}  src={imagem} width={200} height={200}/>
              </div>
              <div className={styles.textos}>
              <p className={styles.pg}><strong>Descrição: </strong> {descricao}</p>
              <p className={styles.pg}><strong>Inspiração: </strong> {inspiracao}</p>
              <p className={styles.pg}><strong>Copa:</strong> {copa}</p>
              <p className={styles.pg}><strong>Trofeus:</strong> {trofeus}</p>
              <p className={styles.pg}><strong>Plataforma:</strong> {plataforma}</p>
              </div>
              <button  onClick={edt}>editar</button>
              <button  onClick={dlt}>excuir</button>
          </div>
         
        </div>)}
        export default Modal