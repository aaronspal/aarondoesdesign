import './home.css'
import '../components/libraries/flexgrid.css'
import '../components/libraries/glitcheffect.css'

import Navigation from "../components/navigation/navigation";
import Cover from "../media/images/brock-wegner-xJOOVt4oKjw-unsplash.jpg";
import React from "react";

function Music() {
    return (
        <>
            <Navigation section="DØES.SOUND"/>
            <img src={Cover} className="imageBackground"/>
            <section className="name textCenter">
                <h2 className="mono glitch">coming soon</h2>
            </section>
        </>
    );
}

export default Music;
