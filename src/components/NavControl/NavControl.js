import { NavigationControl } from 'react-map-gl';
import styles from './NavControl.module.css';

const NavControl = () => {

    return(
        <NavigationControl className={styles.container}></NavigationControl>
    )
}

export default NavControl;