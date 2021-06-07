import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStoreType, UserProfileType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter } from "react-router";


type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <div>
                <Profile
                    userProfile={this.props.userProfile}
                />
            </div>
        );
    }
}
export type MapStatePropsType = {
    userProfile: UserProfileType | null
}
export type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

let mapStateToProps = (state: ReduxStoreType): MapStatePropsType => {
    return {
        userProfile: state.profilePage.userProfile
    }
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile} ) (WithUrlDataContainerComponent);