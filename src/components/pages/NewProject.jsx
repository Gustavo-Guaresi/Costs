import{useNavigate} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){

    const navigate = useNavigate() //antigo History e useHistory

    function createPost(project){
        //initialize costs and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', { method: 'POST', headers: {'Content-type': 'application/json',}, body: JSON.stringify(project),})
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            /*redirect */
            navigate("/projects", { state: { message: "Projeto criado com sucesso" } }) //foi necessário usar o state juntamente com o message,uma vez que estamos manipuando dados, se fosse tão somente a mensagem seria suficiente deixar apenas o message.
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject