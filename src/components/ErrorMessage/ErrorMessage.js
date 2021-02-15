import styles from './ErrorMessage.module.css';

const ErrorMessage = ({onClick}) => {

    return(
        <div className= {styles.container}>
            <div className= {styles.wrapper}>
                <h1 className= {styles.title}>Something get wrong!</h1>
                <p className= {styles.message}>Please write correct address!</p>
                <button onClick= {onClick} className= {styles.btn}>OK</button>
            </div>
        </div>
    )
}

export default ErrorMessage;