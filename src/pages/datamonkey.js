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
                    <p className="p20 margin0 mono">Berlin, DE // 2023 // Software Engineering Intern & UI/UX Designer</p>
                    <h1>Data Monkey</h1>
                </div>
            </div>
            <section className="marginTop100px flexContainer content h100">
                <section className="flexContainer g50">
                    <section className="column w60">
                        <h2>
                            from a complete rebrand to $50,000 in new funding, the team has never been
                            sexier and more competetive
                        </h2>
                    </section>
                    <section className="column w40">
                        <p className="p20">
                            Rocket Team is a student-led organization that designs rockets
                            and research projects for the International Rocketry Engineering Challenge at the University
                            of California, Santa Cruz. The team boasts a size of over 60 members, making it one of the
                            larger
                            student organizations on campus.
                        </p>

                        <p className="p20">
                            I currently serve as the Business Lead and the lead Web Developer for the team. I am
                            responsible for the team's company outreach and fundraising. As a part of this wider effort,
                            I have spent extensive time rebranding the team and developing a new website to create a
                            professional feel.
                        </p>
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
