import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ id,img }) {
    return (
       <section className={styles.Card}>
          <Link to={`/watch/${id}`} >
             <img src={img} alt="conteudo" />
          </Link>
       </section>
    );
}

export default Card

