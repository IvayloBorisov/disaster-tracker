import styles from './Header.module.css';

const Header = () => {

    return(
        <header className={styles.container}>
            <h1 className={styles.title}>DISASTERS TRACKER</h1>
        </header>
    )
}

export default Header;