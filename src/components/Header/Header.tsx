import styles from './Header.module.css';
import headerLogo from '../../img/logo.png';


const Header = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <a className={styles.logo} href="#">
                    <img src={headerLogo} alt="logo"/>
                </a>
            </div>
        </div>
    )
}

export default Header