import styles from './ProfileInfo.module.css';
import bg from "../../../img/bg.jpg";
import avatar from "../../../img/avatar.png";
import React from "react";


const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.bg_img}>
                <img src={bg} alt="bg"/>
            </div>
            <div className={styles.container}>
                <div className={styles.user}>
                    <div className={styles.avatar}>
                        <img src={avatar} alt="avatar"/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}> KATE MARTIENS</div>
                        <div> Date of Birth: 21 May</div>
                        <div> City: London</div>
                        <div> Education: BSU’11</div>
                        <div>Instagram: @kate_girl</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo;