import React, { useState } from 'react';
import Input from "./Input";
import About from "./About";
import Contact from "./contact";

function Main() {

    return(<div className="main">
        <Input/>
        <About/>
        <Contact/>
    </div>);
}

export default Main;