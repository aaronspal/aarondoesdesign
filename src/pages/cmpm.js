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
import SampleAssignment from "../media/images/CMPM/Sample Assignment.png"
import RTNEW from "../media/images/RocketTeam/RTLogo.png"
import visitIcon from "../media/icons/Artboard 11.png"
import downloadIcon from "../media/icons/Artboard 13.png"

import Navigation from "../components/navigation/navigation";
import React, {useState, useEffect} from "react";
import Skill from "../components/skill/skill";
import Statistic from "../components/statistic/statistic";
import DM3 from "../media/images/DataMonkey/DM4.png";

function CMPM() {
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
            <Navigation section="CMPM 17"/>
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
                    <p className="p20 margin0 mono">Santa Cruz, CA // 2025 - Present // Instructor</p>
                    <h1>Introduction to 2D Fabrication</h1>
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
                            CMPM 17: Intro to 2D Fabrication is a class created and taught by my teaching partner and I.
                            The class is an intro-level course intended to teach students how to create digital designs
                            in Adobe Illustrator and apply it to a Crucut Maker 3, Laser Cutter, Printer-Cutter, and
                            Heat Press.
                        </p>

                        <p className="p20">
                            Before teaching, students must first take CMPM 115: Lead By Design. It is an
                            enroll-by-application
                            course that guides students through various teaching methods and course creation. After
                            successfully
                            completing CMPM 115, students then teach the class they design.
                        </p>
                        <a className="mono textRight marginTop50px externalLink" target="_blank" href="https://undergrad.engineering.ucsc.edu/newsletter/lead-by-design-info-session-3/">
                            Learn more about Lead By Design
                            <img src={visitIcon} className="figcaptionIcon" alt="visit"/>
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
                <figcaption>course syllabus</figcaption>
                <hr/>
                <p className="p20 marginBottom25px">gallery</p>
                <img src={CM5} className="imageShowcase"/>
                <figcaption>sample photo until I have photos taken</figcaption>

                <h1 className="marginTop50px">a new way of teaching</h1>
                <section className="flexContainer marginTop50px g50">
                    {/*<section className="column w15"/>*/}
                    <section className="column w60">
                        <p className="p20">
                            At my university, there exists a gap in between Art and Engineering. Being a former
                            Computer Science major, engineers at UC Santa Cruz often keep to their lines of code and
                            logic gates.
                            The Art majors, keep to traditional artistic mediums and seldom get the chance to venture
                            into the world of engineering.
                            Creating and teaching this course is an opportunity to explore that intersection, while also
                            sharing with others topics I
                            am passionate about.
                        </p>
                        <p className="p20">
                            <span className="italic">Introduction to 2D Fabrication</span> is designed with modern
                            teaching in mind, employing the use
                            of active pedagogy and formative
                            assessment to aid in student development. The class heavily emphasises a hands-on-learning
                            approach, where students learn through iterative design and prototyping. While the class is,
                            first
                            and foremost, an engineering
                            course under the Engineering Division, we have incorporated elements of art classes such as
                            open studio sessions, allowing students
                            to have freedom and ownership in their learning.
                        </p>
                        <p className="p20">
                            Frankly, this class has been my passion since I began working on it in September of 2024. I
                            am beyond
                            humbled and grateful to be in a position where I can give back in a meaningful way, and this
                            course reflects everything I wish I knew going into university as a first year in an
                            environment
                            that does not support art through engineering.
                        </p>
                    </section>
                    <section className="column w40">
                        <img src={SampleAssignment} className="image100 pt1"/>
                        <figcaption>midterm project - board game</figcaption>
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
                        <Skill skillname="Agile/Scrum"/>
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

export default CMPM;
