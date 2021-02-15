import { Button } from '../index';
import styles from './ErrorMessage.module.css';


const ErrorMessage = ({onClick}) => {

    return(
        <div className= {styles.container}>
            <div className= {styles.wrapper}>
                <div className= {styles['message-container']}>
                    <h1 className= {styles.title}>Ooops...</h1>
                    <p className= {styles.message}>Please write correct address!</p>
                </div>
                <div className={styles['btn-container']}>
                <Button onClick={onClick} name={"error"} content={"OK"} />


                </div>
            </div>
        </div>
    )
}

export default ErrorMessage;