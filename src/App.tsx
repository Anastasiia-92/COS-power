import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StoreType} from "./redux/state";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="App-wrapper-content">
                    <Route path='/profile' render={() => <Profile
                        state={state.profilePage}
                        dispatch={props.store.dispatch.bind(props.store)}
                        // addPost={props.store.addPost.bind(props.store)}
                        // changeNewTextPost={props.store.changeNewTextPost.bind(props.store)}
                    />}
                    />
                    <Route path='/dialogs' render={() => <Dialogs state={state.dialogsPage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
