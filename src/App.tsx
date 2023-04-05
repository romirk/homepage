import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/fonts.css'
import './styles/App.css';
import {Navigation} from "./components/nav";
import {Main} from "./components/main";

function App() {
    return (<div className="App">
        <Navigation/>
        <Main/>
    </div>);
}

export default App;
