import styles from "./Card.module.css";

function Card({ id,img }) {
    return (
       <section className={styles.Card}>
          <a
           href={`https://www.youtube.com/watch?v=${id}`}
             rel="noreferrer noopener"             
             target="_blank"
            >

             <img src={img} alt="conteudo" />
          </a>
       </section>
    );
}

export default Card

