import { Button } from '../index';
import styles from './ErrorMessage.module.css';


const ErrorMessage = ({onClick}) => {

    return(
        <div className= {styles.container}>
            <div className= {styles.wrapper}>
                <h1 className= {styles.title}>Something get wrong!</h1>
                <p className= {styles.message}>Please write correct address!</p>
                <Button onClick={onClick} name={"error"} content={"OK"} />
            </div>
        </div>
    )
}

export default ErrorMessage;