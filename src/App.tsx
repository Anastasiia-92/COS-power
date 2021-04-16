import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
                <div className="App-wrapper-content">
                    <Route path='/profile' render={ () => <Profile posts={props.state.profilePage.posts}/>} />
                    <Route path='/dialogs' render={ () => <Dialogs dialog={props.state.dialogsPage.dialogs}
                                                                   message={props.state.dialogsPage.messages}/>} />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

        </div>
        </BrowserRouter>
    );
}

export default App;
