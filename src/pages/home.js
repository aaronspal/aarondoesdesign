import './home.css'
import '../components/flexgrid.css'
import '../components/glitcheffect.css'

import image from "../media/images/testpic.png";
// import globe from "../media/icons/Artboard 8.svg";
import globe from "../media/icons/GlobeWhite.svg";
import Illustrator from "../media/icons/IllustratorWhite.svg";
import pattern from "../media/images/Pattern1.svg";
import raveimage from "../media/images/nick-fancher-2U4A9-Gktss-unsplash.jpg";
import SantaCruz from "../media/images/simon-shim-WpNquk32Rm4-unsplash.jpg";
import Feature from "../components/feature";
import Footer from "../components/footer";
import SectionNav from "../components/sectionNav";
import GradientBackground from "../components/gradientBackground";
import ExperienceIcon from "../components/experienceIcon";

function Home() {
    return (
        <GradientBackground>
            <SectionNav/>
            <section className="name content">
                {/*<h1>Aaron Spalding</h1>*/}
                <h1 className="glitch">
                    <span aria-hidden="true">Aaron Spalding</span>
                    Aaron Spalding
                    <span aria-hidden="true">Aaron Spalding</span>
                </h1>
                <h2>Designer Programmer Student</h2>
            </section>
            <section className="flexContainer g30 content">
                <section className="column w80">
                    <section className="flexContainer about-section">
                        <section className="column w30">
                            <h2 className="glitch">
                                <span aria-hidden="true">about</span>
                                about
                                <span aria-hidden="true">about</span>
                            </h2>
                        </section>
                        <section className="column w70">
                            <p className="p20">
                                I am a third-year Art and Design: Games and Playable Media studying at UC Santa Cruz. I
                                am
                                dedicated to designing experiences, interfaces, and art that people will interact with
                                and
                                benefit from. Though I am just a student, I believe you can only learn so much in a
                                lecture.
                                I love throwing myself into new endeavors and learning through experience! At my
                                university,
                                I am deeply involved in my University's rocketry club, where I just completed a massive
                                rebranding project, raised over $20,000 in new funding, and now leading a complete
                                redevelopment of our website. I have also had had the opportunity to work abroad in
                                Berlin,
                                Germany in 2023, where I worked as a software engineer intern.
                            </p>
                        </section>
                    </section>
                    <hr/>
                </section>
                <section className="column w20">
                    <img src={globe} className="image100"/>
                    Based out of: Santa Cruz, CA
                </section>
            </section>
            <section className="flexContainer g30 content">
            <section className="column w80">
                    <section className="flexContainer work-section">
                        <section className="column w30">
                            <h2 className="glitch">
                                <span aria-hidden="true">cases</span>
                                cases
                                <span aria-hidden="true">cases</span>
                            </h2>
                        </section>
                        <section className="column w70 alignCenter">
                            <button>view all cases</button>
                        </section>
                    </section>
                    <Feature position={'Rocket Team at UC Santa Cruz'} image={image} type={'Lead Web Developer for'}
                             tool1="React" tool2="Figma" tool3="Adobe CC"
                             skill1="UI/UX Design" skill2="Branding" skill3="Marketing"/>
                    <Feature position={'CMPM 17'} image={image} type={'INSTRUCTOR FOR'}
                             tool1="Laser Cutting" tool2="Printer Cutters" tool3="Canvas LMS"
                             skill1="Course Creation" skill2="Teaching"/>
                    <Feature position={'Urban Monkeys'} image={image} type={'Internship at'}
                             tool1="Figma" tool2="Google Analytics" tool3="Flutter"
                             skill1="Software Engineering" skill2="UI/UX Design"/>
                    <hr className="hide-nav-section"/>
                </section>
                <section className="column w20">
                    {/*<img src={raveimage} className="image100 margintest"/>*/}
                </section>
            </section>
                    <section className="content">
                        <img src={SantaCruz} className="image100"/>
                    </section>
                    <Footer/>
        </GradientBackground>
);
}

export default Home;
