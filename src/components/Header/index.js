import styles from "./Header.module.css"

function  Header(){
    return(
        <header className={styles.header}>

            <span> ALURAFLIX </span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Novo Vídeo</a>
            </nav>

        </header>
    )
}

export default Header;