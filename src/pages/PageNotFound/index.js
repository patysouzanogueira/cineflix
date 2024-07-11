import Footer from '../../components/Footer';
import Header from '../../components/Header';
import erro404 from './error404.png'
import styles from "./PageNotFound.module.css";

    function PageNotFound() {
        return(
           <>
               <Header />
                  <section className={styles.container}>
                     <h2>Ops! Página  não Encontrada.</h2>
                    <img src={erro404} alt="erro 404 logo"/>
                    </section>
                <Footer />
           </>

        );
    }

    export default PageNotFound;