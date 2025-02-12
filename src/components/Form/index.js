import { useState } from "react";
import { categories } from "../Category";
import styles from "./Form.module.css";

function Form() {

    const [ url, setUrl ] = useState('')
    const [ Category, setCategory ] = useState('')
    const [ videos, setVideos ] = useState([])
    const [ errors, setErrors ] = useState('')

function valideUrl(url) {
    const regex = /^(?:https?:|\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_+])$/

    if(!regex.test(url) || url.length < 43) {
        setErrors('ERRO: URL inválida!')
        return false
    } else {
        return url.substring(32, 43)
    }
}

    function onSave(e) {
            e.preventDefault()
            console.log(url, Category) 

             if(!Category || Category ==='-'){
                setErrors('ERRO: Escolha uma Categoria!')
                return
             }else {
               setErrors('')
             }

            const urlVideo = valideUrl(url)
            if(urlVideo && Category) {

            const newVideo = { url,Category}
            setVideos([...videos, newVideo])
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))

            setUrl('')
            setCategory('')
           } else{
            setErrors('ERRO: URL inválida!')
           }
         
    }

    return(
        <section className={styles.container}>
            <h2>Cadastro de Vídeos</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do Vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do Vídeo"
                        required="required"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        minLength="43"
                        maxLength="43"
                    />
                </div>

                <div>
                    <label>Categoria</label>
                    <select
                        required="required"
                        value={Category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="-">Selecione uma Categoria</option>
                        { categories.map(item => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>

                <div>
                    <button>Cadastrar</button>
                </div>

                <div>
                    <button></button>
                </div>
            </form>
        </section>

    );
}

export default Form;