import './home.css'
import './pages.css'
import '../components/libraries/flexgrid.css'
import '../components/libraries/glitcheffect.css'
import Footer from '../components/footer/footer'
import ScrollProgress from "../components/scrollprogress/scrollprogress";


import Cover from "../media/images/CMPM/20231215-aerial-baskin-engineering-NEG-03.JPG";
import CM1 from "../media/images/CMPM/Bildschirmfoto 2025-01-27 um 00.32.49.png"
import CM2 from "../media/images/CMPM/Bildschirmfoto 2025-01-27 um 00.34.30.png"
import CM3 from "../media/images/CMPM/Bildschirmfoto 2025-01-27 um 00.36.13.png"
import CM4 from "../media/images/CMPM/Bildschirmfoto 2025-01-27 um 00.37.17.png"
import CM6 from "../media/images/CMPM17.png"
import CM5 from "../media/images/CMPM/10-18-23-Kresge-Acad-3201-Classroom-CL-003.jpg"
import RTOLD from "../media/images/RocketTeam/32784385.png"
import RTNEW from "../media/images/RocketTeam/RTLogo.png"
import visitIcon from "../media/icons/Artboard 11.png"
import downloadIcon from "../media/icons/Artboard 13.png"

import Navigation from "../components/navigation/navigation";
import React, {useState, useEffect} from "react";
import Skill from "../components/skill/skill";
import Statistic from "../components/statistic/statistic";
import DM3 from "../media/images/DataMonkey/DM4.png";

function Slugworks() {
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
            <Navigation section="SLUGWORKS"/>
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
                    <p className="p20 margin0 mono">Santa Cruz, CA // 2023 - Present // Graphic Designer</p>
                    <h1>Slugworks</h1>
                </div>
            </div>
            <section className="marginTop100px flexContainer content h100">
                <section className="flexContainer g50">
                    <section className="column w40">
                        <h2>
                            a course designed and taught by UCSC students, for UCSC students
                        </h2>
                    </section>
                    <section className="column w60">
                        <p className="p20">
                            CMPM 17: Intro to 2D Fabrication is a class designed and taught by my teaching partner and I.
                            The class is an intro-level course intended to teach students on Adobe Illustrator, and how
                            to use it to create designs on a Crucut Maker 3, Laser Cutter, Printer-Cutter, and Heat Press.
                        </p>

                        <p className="p20">
                            To teach a class, students must first take CMPM 115: Lead By Design. It is an enroll-by-application
                            course that guides students through various teaching methods and course creation. After successfully
                            completing CMPM 115, students then teach the class they design.
                        </p>
                        <a className="mono textRight marginTop25px externalLink">
                            Click here to learn more about Lead By Design
                            <img src={visitIcon} className="figcaptionIcon"/>
                        </a>

                    </section>
                </section>
            </section>
            <section className="flexContainer spaceBetween content">
                <div className="w30">
                    <Statistic number="10" text="weeks long (one quarter)"/>
                </div>
                <div className="w30">
                    <Statistic prefix="0" number="3" text="unit course"/>
                </div>
                <div className="w30">
                    <Statistic number="20" suffix="+" text="students"/>
                </div>
            </section>
            <section className="content marginTop50px">
                <hr/>
                <p className="p20 marginBottom25px">featured work</p>
                <section className="gridContainer2x2">
                    <div className="gridItem">
                        <img src={CM1} className="image100"/>
                    </div>
                    <div className="gridItem">
                        <img src={CM2} className="image100"/>
                    </div>
                    <div className="gridItem">
                        <img src={CM3} className="image100"/>
                    </div>
                    <div className="gridItem">
                        <img src={CM4} className="image100"/>
                    </div>
                </section>
                <figcaption className="paddingTop30">sample lecture slides</figcaption>
                <img src={CM6} className="imageShowcase"/>
                <figcaption>canvas home page</figcaption>
                <hr/>
                <p className="p20 marginBottom25px">gallery</p>
                <img src={CM5} className="imageShowcase"/>
                <figcaption>sample photo until I have photos taken</figcaption>

                <h1 className="marginTop50px">why teaching?</h1>
                <section className="flexContainer marginTop50px g30">
                    {/*<section className="column w15"/>*/}
                    <section className="column w30">
                        <img src={RTOLD} className="image100new"/>
                        <figcaption>old logo (pre 2024)</figcaption>
                        <img src={RTNEW} className="image100new"/>
                        <figcaption>redesigned logo (2024)</figcaption>
                    </section>
                    <section className="column w50">
                        <p className="p20">
                            Before joining, the team lacked a unified visual identity and had been using three different
                            logos from the last ten years. As the team's size and demands grew beginning in late 2023,
                            the need for cohesive branding and professionalism became much more apparent.
                        </p>
                        <p className="p20">
                            Joining in late 2023, I laid out a comprehensive strategy to rebrand the team within one
                            year. This
                            included a new logo, design language, merchandise, and website. The objective was to
                            position
                            the team less as a group of amateur rocket hobbyists and more of a professional,
                            competetive,
                            and premiere destination for all things aerospace at UC Santa Cruz.
                        </p>
                        <p className="p20">
                            One year later, and the rebranding project has been a total success. I created an entire new
                            branding guides for the team to follow along with sample instagram and powerpoint templates.
                            In the summer of 2024, I designed new shirts and a banner to be used at our events. I led a
                            web development team in Fall of 2024 and successfully rebranded our website, and as of
                            Winter
                            2025, I am looking beyond our club to design new marketing material and sponsorship packages
                            to be used for our business team.
                        </p>
                        <p className="p20">
                            In additional to my rebranding project, I have also raised approximately $50,000 through
                            grants
                            and sponsorship outreach for the team as of January 2025.
                        </p>
                    </section>
                </section>
                <section className="flexContainer marginTop100px">
                    <section className="gridContainer4x g15 w75">
                        <Skill skillname="Illustrator"/>
                        <Skill skillname="Cricut Design"/>
                        <Skill skillname="LightBurn"/>
                        <Skill skillname="VersaWorks"/>
                        <Skill skillname="Laser Cutting"/>
                        <Skill skillname="Printing"/>
                        <Skill skillname="Teaching"/>
                        <Skill skillname="Leadership"/>
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

export default Slugworks;
