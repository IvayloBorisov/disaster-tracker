import spinner from '../../assets/Spinner-1s-200px.gif';
import styles from './Loading.module.css';

const Loading = () => {

    return(
        <div className={styles.container}>
          <img className={styles.spinner} src={spinner} alt="loading..." />
        </div>
    )
}

export default Loading;