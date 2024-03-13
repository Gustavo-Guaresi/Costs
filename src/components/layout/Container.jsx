import styles from './Container.module.css'


function Container(props){
    return(         // a linha em relação a "props.children" serve para as crianças acopladas em container ainda terem suas propriedades mantidas, no caso, seguir o link
        <div className = {`${styles.container} ${styles[props.customClass]}`}> 
            {props.children}       
        </div>
    )
}

export default Container