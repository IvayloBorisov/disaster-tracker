import styles from './Header.module.css';

const Header = ({className}) => {

    return(
        <header className={`${styles['container']} ${styles[className]}`}>
            <h1 className={`${styles['title']} ${styles[className]}`}>DISASTERS TRACKER</h1>
        </header>
    )
}

export default Header;