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

import Navigation from "../components/navigation/navigation";
import Skill from "../components/skill/skill";
import FeatureLarge from "../components/feature/featurelarge";
import RocketTeamCover from "../media/images/RocketTeam.png";
import CMPM17Cover from "../media/images/CMPM17.png";
import DMCover from "../media/images/DataMonkey.png";
import FSCover from "../media/images/FormulaSlug.png";
import SlugworksCover from "../media/images/Slugworks.png";
import Overlord from "../media/images/work/Artboard 21.png";
import L1 from "../media/images/work/Artboard 15_1.png";
import Bingo from "../media/images/work/Artboard 15.png";
import Pando from "../media/images/work/Artboard 17.png";
import YouTube from "../media/images/work/Frame 1.png";
import Yearbook from "../media/images/work/Artboard 17_1.png";

function Work() {
    return (
        <>
            <Navigation section="ALL WORK"/>
            <ScrollProgress/>
            <section className="content">
                <h1 className="paddingTop50px">work</h1>
                <hr/>
                <section className="flexContainer">
                    <section className="column w30">
                        <h2 className="glitch">
                            <span aria-hidden="true">main projects</span>
                            main projects
                            <span aria-hidden="true">main projects</span>
                        </h2>
                    </section>
                    <section className="column w70">
                        <p className="p20">Work that I have done for various jobs and student organizations in the last two years. These reflect month or year-long projects and may still be ongoing.</p>
                    </section>
                </section>
                <section className="marginTop50px"/>
                <FeatureLarge path="/rocketteam" position={'Rocket Team'} image={RocketTeamCover} timeStart="DEC 2023"
                              timeEnd="PRESENT"
                              type={'Web Developer & Business Lead'}
                              text="Over the last year, I have led an ambitious rebranding project and fundraising strategy that has resulted in $50,000 USD in new funding. Arguably my best work, and the work I am most proud of."
                              tool1="React" tool2="Figma" tool3="Adobe CC"
                              skill1="UI/UX Design" skill2="Branding" skill3="Marketing"/>

                <FeatureLarge path="/cmpm" position={'CMPM 17'} image={CMPM17Cover} timeStart="SEP 2024"
                              timeEnd="PRESENT"
                              type={'Instructor'}
                              text="I am currently designing a fully-credited university-level course on 2D Fabrication that I will be teaching to Students begining Spring 2025."
                              tool1="Laser Cutting" tool2="Printer Cutters" tool3="Canvas LMS"
                              skill1="Course Creation" skill2="Teaching"/>
                <FeatureLarge path="/datamonkey" position={'Data Monkey'} image={DMCover} timeStart="JUN 2023"
                              timeEnd="SEP 2023"
                              type={'Software Engineering Intern'}
                              text="I lived in Berlin during the summer of 2023 as I worked with Data Monkey (formerly Urban Monkeys) to help create their AI-Powered data analytics and visualization tool."
                              tool1="Figma" tool2="Google Analytics" tool3="Python"
                              skill1="Engineering" skill2="UI/UX Design"/>
                <FeatureLarge path="/slugworks" position={'Slugworks'} image={SlugworksCover} timeStart="OCT 2023"
                              timeEnd="PRESENT"
                              type={'Graphic Designer'}
                              text="I currently work here as a part-time student employee. I help students create projects with laser cutters, 3D printers, etc. I also create many of the graphics and signage around the machine shop and online."
                              tool1="Adobe Illustrator" tool2="3D Printing" tool3="Laser Cutting"
                              skill1="2D Fabrication" skill2="Graphic Design" skill3="Student Support"/>
                <FeatureLarge path="/formulaslug" position={'Formula Slug'} image={FSCover}
                              timeStart="SEPT 2022" timeEnd="JAN 2024"
                              type={'Graphic Designer & Finance Lead'}
                              text="The first student organization I joined while at university. I was responsible for raising money for the team and I updated the ten-year-old branding to reflect a new generation of competition vehicles."
                              tool1="Adobe Illustrator" tool2="Adobe InDesign" tool3="Figma"
                              skill1="Engineering" skill2="Graphic Design" skill3="Marketing"/>
                <section className="flexContainer">
                    <section className="column w30">
                        <h2 className="glitch">
                            <span aria-hidden="true">side projects</span>
                            side projects
                            <span aria-hidden="true">side projects</span>
                        </h2>
                    </section>
                    <section className="column w70">
                        <p className="p20">fun side projects or class projects from the last few years that aren't
                            worthy of an entire page, but
                            still worth showing off</p>
                    </section>
                </section>
                <section className="gridContainer2x2 g20 marginTop25px">
                    <div className="gridItemx">
                        <img src={L1} className="image100 marginN5px"/>
                        <figcaption>L1 Rocket with custom vinyl wrap (Illustrator)</figcaption>
                    </div>
                    <div className="gridItemx">
                        <img src={Bingo} className="image100 marginN5px"/>
                        <figcaption>2024 VP Debate Drunk Bingo (InDesign)</figcaption>
                    </div>
                    <div className="gridItemx">
                        <img src={Yearbook} className="image100 marginN5px"/>
                        <figcaption>The Passage 2020 - Yearbook (InDesign)</figcaption>
                    </div>
                    <div className="gridItemx">
                        <img src={Pando} className="image100 marginN5px"/>
                        <figcaption>Pando (Webflow)</figcaption>
                    </div>
                    <div className="gridItemx">
                        <img src={YouTube} className="image100 marginN5px"/>
                        <figcaption>YouTube Discover Topics Landing Page (Figma)</figcaption>
                    </div>
                    <div className="gridItemx">
                        <img src={Overlord} className="image100 marginN5px"/>
                        <figcaption>Operation Overlord (InDesign)</figcaption>
                    </div>
                </section>
                <section className="marginTop50px"></section>
                <h2 className="glitch">
                    <span className="" aria-hidden="true">comittetes I am apart of</span>
                    comittetes I am apart of
                    <span className="" aria-hidden="true">comittetes I am apart of:</span>
                </h2>
                <section className="gridContainer4x g15">
                    <Skill skillname="Baskin Leadership"/>
                    <Skill skillname="Slugworks Executive Board"/>
                    <Skill skillname="Sustainability Lab Board"/>
                </section>
            </section>
            <Footer/>
        </>
    );
}

export default Work;
