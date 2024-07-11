import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Container";
import styles from "./Watch.module.css"

function Watch() {
    return (
        <>
           <Header />
            <Container>
            <section className={styles.watch}>
                 <h1>novo video</h1>
            </section>
            </Container>
            <Footer />
        </>
    );
}

export default Watch;