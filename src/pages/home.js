import './home.css'
import './homebreakpoints.css'
import '../components/libraries/flexgrid.css'
import '../components/libraries/glitcheffect.css'

import globe from "../media/icons/GlobeWhite.svg";
import SantaCruz from "../media/images/SantaCruz.png";
import RocketTeamCover from "../media/images/RocketTeam.png";
import DataMonkeyCover from "../media/images/DataMonkey.png";
import CMPM17Cover from "../media/images/CMPM17.png";
import FormulaSlugCover from "../media/images/FormulaSlug.png";
import SlugworksCover from "../media/images/Slugworks.png";
import Feature from "../components/feature/feature";
import Footer from "../components/footer/footer";
import SectionNav from "../components/navigation/sectionNav";
import GradientBackground from "../components/background/gradientBackground";

import { Link } from 'react-router-dom';
import Navigation from "../components/navigation/navigation";

function Home() {
    return (
        <>
            <Navigation section="AARON SPALDING"/>
            <GradientBackground>
            <SectionNav/>
            <section className="name content">
                <h1 className="glitch">
                    <span aria-hidden="true">Aaron Spalding</span>
                    Aaron Spalding
                    <span aria-hidden="true">Aaron Spalding</span>
                </h1>
                <h2 className="mono">designer // programmer // student</h2>
            </section>
            <section className="flexContainer g50 content flexContainerBreakpoint2">
                <section className="column w85 w85Breakpoint">
                    <section className="flexContainer about-section">
                        <section className="column w25 w25Breakpoint">
                            <h2 className="glitch">
                                <span aria-hidden="true">about</span>
                                about
                                <span aria-hidden="true">about</span>
                            </h2>
                        </section>
                        <section className="column w75 w75Breakpoint">
                            <p className="p20">
                                I am a third-year Art and Design: Games and Playable Media studying at UC Santa Cruz. I
                                love to design experiences, interfaces, and art that people will interact with
                                and benefit from. Though I am just a student, I believe you can only learn so much in a
                                lecture. I love throwing myself into new endeavors and learning through experience. At
                                my
                                University, I’ve led two successful rebranding projects and a website redevelopment
                                while raising
                                over $50,000 in new funding. I am also the designer and teacher for CMPM17: Intro to 2D
                                Fabrication, a class that specializes
                                in teaching students how to use Adobe Illustrator and apply it to a laser cutter, Cricut
                                Maker 3, etc.
                                I have also had had the opportunity to work abroad in Berlin where I worked as a
                                software engineer intern.
                            </p>
                        </section>
                    </section>
                    <hr className="hrBreakpoint"/>
                </section>
                <section className="column w15 textCenter globeBreakpoint">
                    <img src={globe} className="image100 image100BreakpointGlobe"/>
                    <h6 className="mono">Based out of:<br/>Santa Cruz, CA</h6>
                </section>
            </section>
            <section className="flexContainer g30 content">
                <section className="column w80 w85Breakpoint">
                    <hr/>
                    <section className="flexContainer experience-section">
                        <section className="column w30">
                            <h2 className="glitch">
                                <span aria-hidden="true">experience</span>
                                experience
                                <span aria-hidden="true">experience</span>
                            </h2>
                        </section>
                        <section className="column w70 alignCenter">
                            <Link to={"/work"}>
                                <button>view all work</button>
                            </Link>
                        </section>
                    </section>
                    <section className="">
                        <Feature path="/datamonkey" position={'Data Monkey'} image={DataMonkeyCover}
                                 type={'Internship At'}
                                 tool1="Figma" tool2="Google Analytics" tool3="Python"
                                 skill1="Software Engineering" skill2="UI/UX Design"/>
                        {/*<hr className="hide-nav-section"/>*/}
                        <Feature path="/slugworks" position={'Slugworks'} image={SlugworksCover}
                                 type={'Graphic Designer At'}
                                 tool1="Adobe Illustrator" tool2="3D Printing" tool3="Laser Cutting"
                                 skill1="2D Fabrication" skill2="Graphic Design" skill3="Student Support"/>
                        <hr/>
                    </section>
                    <section className="flexContainer projects-section">
                        <section className="column w30">
                            <h2 className="glitch">
                                <span aria-hidden="true">projects</span>
                                projects
                                <span aria-hidden="true">projects</span>
                            </h2>
                        </section>
                        <section className="column w70 alignCenter">
                            <Link to={"/work"}>
                                <button>view all work</button>
                            </Link>
                        </section>
                    </section>
                    <section className="">
                        <Feature path="/rocketteam" position={'Rocket Team at UC Santa Cruz'} image={RocketTeamCover}
                                 type={'Lead Web Developer for'}
                                 tool1="React" tool2="Figma" tool3="Adobe CC"
                                 skill1="UI/UX Design" skill2="Branding" skill3="Marketing"/>
                        <Feature path="/cmpm" position={'CMPM 17'} image={CMPM17Cover} type={'INSTRUCTOR FOR'}
                                 tool1="Laser Cutting" tool2="Printer Cutters" tool3="Canvas LMS"
                                 skill1="Course Creation" skill2="Teaching"/>
                        <Feature path="/cmpm" position={'Formula Slug'} image={FormulaSlugCover} type={'DESIGNER & FINANCE LEAD FOR'}
                                 tool1="Adobe Illustrator" tool2="Adobe InDesign" tool3="Figma"
                                 skill1="Engineering" skill2="Graphic Design" skill3="Marketing"/>
                        <hr className="hide-nav-section"/>
                    </section>
                </section>
            </section>
                <section className="content">
                    <img src={SantaCruz} className="image100 marginTop50px"/>
                </section>
                <Footer/>
            </GradientBackground>
        </>
    );
}

export default Home;
