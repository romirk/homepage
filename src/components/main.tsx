import React from "react";
import '../styles/main.css'
import Navigation from "./nav";

function Logo() {
    return <div className="title unselectable">
        romir.
    </div>;
}

export function Main() {
    return <div id="main" className="m-auto">
        <video autoPlay muted loop id="bg-video">
            <source src={process.env.PUBLIC_URL + '/media/pexels.mp4'} type="video/mp4"/>
        </video>
        <Navigation/>
        {/*<Hero/>*/}
        <div id="logobox" className="m-auto p-5">
            <Logo/>
        </div>
    </div>;
}