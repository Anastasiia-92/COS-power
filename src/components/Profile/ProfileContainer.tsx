import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "redux";
import {ReduxStoreType, UserProfileType} from "../../redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";


type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "17223"
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }

    render() {

        return (
            <div>
                <Profile
                    userProfile={this.props.userProfile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        );
    }
}


export type MapStatePropsType = {
    userProfile: UserProfileType | null,
    status: string

}
export type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void

}

let mapStateToProps = (state: ReduxStoreType): MapStatePropsType => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status
    }
}


// export default withAuthRedirectComponent(withRouter(connect(mapStateToProps, {getUserProfile} ) (ProfileContainer)));

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirectComponent
)(ProfileContainer)