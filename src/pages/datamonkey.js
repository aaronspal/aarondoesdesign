import './home.css'
import './pages.css'
import '../components/libraries/flexgrid.css'
import '../components/libraries/glitcheffect.css'
import Footer from '../components/footer/footer'
import ScrollProgress from "../components/scrollprogress/scrollprogress";


import Cover from "../media/images/DataMonkey.png";
import DM1 from "../media/images/DataMonkey/DM1.png"
import DM2 from "../media/images/DataMonkey/DM3.png"
import DM3 from "../media/images/DataMonkey/DM4.png"
import DM5 from "../media/images/DataMonkey/DM5.png"
import DM4 from "../media/images/DataMonkey/DM6.png"
import RTOLD from "../media/images/RocketTeam/32784385.png"
import RTNEW from "../media/images/RocketTeam/RTLogo.png"
import visitIcon from "../media/icons/Artboard 11.png"
import downloadIcon from "../media/icons/Artboard 13.png"

import Navigation from "../components/navigation/navigation";
import React, {useState, useEffect} from "react";
import Skill from "../components/skill/skill";

function DataMonkey() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const transitionDistance = window.innerHeight * 0.65;
            const progress = Math.min(window.scrollY / transitionDistance, 1);
            requestAnimationFrame(() => setScrollProgress(progress));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Navigation section="DATA MONKEY"/>
            <ScrollProgress/>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 1 - scrollProgress,
                zIndex: -1
            }}>
                <img src={Cover} className="imageBackground"/>
            </div>
            <div className="hero">
                <div className="content">
                    <p className="p20 margin0 mono">Berlin, DE // 2023 // Software Engineering & UI/UX Intern</p>
                    <h1>Data Monkey</h1>
                </div>
            </div>
            <section className="marginTop100px flexContainer content h100">
                <section className="flexContainer g50">
                    <section className="column w30">
                        <h2>about</h2>
                    </section>
                    <section className="column w70">
                        <p className="p20">
                            DataMonkey (formerly UrbanMonkeys) is a Berlin, based company that specializes in data
                            visualization through the power of AI.
                        </p>

                        <p className="p20">
                            Through the summer of 2023, I worked alongside their team in Berlin to deliver impressive new
                            prototypes
                            for their upcoming application, which launched the following year. My prototypes were
                            recreated
                            nearly 1:1 in the final build and were used extensively in marketing material. In addition
                            to
                            these responsibilities, I also helped reform the Google Analytics data collection techniques
                            used for their
                            other application and aided in the development of a backend data processing pipeline.
                        </p>
                        <a className="mono textRight marginTop50px externalLink" target="_blank"
                           href="https://www.datamonkey.tech/">
                            Visit DataMonkey
                            <img src={visitIcon} className="figcaptionIcon" alt="visit"/>
                        </a>
                    </section>
                </section>
            </section>

            <section className="content">
                <hr/>
                <p className="p20 marginBottom25px">featured work</p>
                <img src={DM1} className="imageShowcase"/>
                <figcaption>login page</figcaption>
                <img src={DM2} className="imageShowcase"/>
                <figcaption>data home page</figcaption>
                <img src={DM3} className="imageShowcase"/>
                <figcaption>early dashboard prototype</figcaption>
                <img src={DM4} className="imageShowcase"/>
                <figcaption>data visualization map mode</figcaption>
                <img src={DM5} className="imageShowcase"/>
                <figcaption>user management menu</figcaption>
                {/*<img src={LeWireframe} className="image100"/>*/}
                <section className="flexContainer marginTop100px">
                    <section className="gridContainer4x g15 w75">
                        <Skill skillname="Google Cloud"/>
                        <Skill skillname="Google Analytics"/>
                        <Skill skillname="Python"/>
                        <Skill skillname="Figma"/>
                        <Skill skillname="UI/UX Design"/>
                        <Skill skillname="Prototyping"/>
                    </section>
                    <section className="column w25">
                        <h2 className="textRight margin0">tools // skills</h2>
                    </section>
                </section>

            </section>

            <Footer/>
        </>
    );
}

export default DataMonkey;
