import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ReduxStoreType, UserProfileType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter } from "react-router";
import {Redirect} from "react-router-dom";



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
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"} />
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
    userProfile: UserProfileType | null,
    isAuth: boolean
}
export type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}

let mapStateToProps = (state: ReduxStoreType): MapStatePropsType => {
    return {
        userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth
    }
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile} ) (WithUrlDataContainerComponent);