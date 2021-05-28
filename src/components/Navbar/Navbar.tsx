import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const Navbar = () => {
    return (
        <nav className={styles.wrap}>
            <div className={styles.item}>
                <div className={styles.list}>
                    <img src="" alt=""/>
                    <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
                </div>
                <div className={styles.list}><NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink></div>
                <div className={styles.list}><NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink></div>
                <div className={styles.list}><NavLink to="/users" activeClassName={styles.activeLink}>Users</NavLink></div>
                <div className={styles.list}><NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink></div>
                <div className={styles.line}></div>
                <div className={styles.list}><NavLink to="/settings" activeClassName={styles.activeLink}>Settings</NavLink></div>
            </div>
        </nav>
    )
}


export default Navbar;