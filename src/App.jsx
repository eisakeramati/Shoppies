import React, {useState} from "react";
import Header from "./Header";
import Banner from "./Banner";
import Main from "./main";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (<div className="body">
    <Header />
        <Banner />
    <Main />
    </div>);
}

export default App;