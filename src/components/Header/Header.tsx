import styles from './Header.module.css';
import headerLogo from '../../img/logo.png';
import {NavLink} from "react-router-dom";

type HeaderPropsType ={
    isAuth: boolean,
    login: null | string,
}

const Header = (props: HeaderPropsType) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <a className={styles.logo} href="#">
                    <img src={headerLogo} alt="logo"/>
                </a>
                <div className={styles.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={"/login"}>login</NavLink>}

                </div>
            </div>
        </div>
    )
}

export default Header