import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsTypes, CustomStoreType} from "./redux/store";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {ReduxStoreType} from "./redux/redux-store";

type AppPropsType = {
    store: ReduxStoreType
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="App-wrapper-content">
                    <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
