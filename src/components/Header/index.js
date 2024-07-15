import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function  Header(){
    return(
        <header className={styles.header}>
            <Link to="/">
            <span> CINEFLIX </span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                {/* <Link to="/watch">Assistir</Link> */}
                <Link to="/search">Novo Video</Link>
            </nav>

        </header>
    )
}

export default Header;