import styles from './ProfileInfo.module.css';
import bg from "../../../img/bg.jpg";
import avatar from "../../../img/avatar.png";
import React from "react";
import {UserProfileType} from "../../../redux/redux-store";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";



type ProfileInfoPropsType = {
    userProfile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
}
const ProfileInfo = (props: ProfileInfoPropsType) => {

    if(!props.userProfile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<img src={bg} alt="bg"/>*/}
            {/*<div className={styles.bg_img}>*/}

            {/*</div>*/}
            <div className={styles.container}>
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                {/*<img src={props.userProfile?.photos.large}/>*/}
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