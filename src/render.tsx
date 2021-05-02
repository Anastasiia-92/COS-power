import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, changeNewTextPost, RootStateType, state} from './redux/state';

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                changeNewTextPost={changeNewTextPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
reportWebVitals();