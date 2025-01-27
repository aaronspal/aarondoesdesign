import './home.css'
import './pages.css'
import '../components/libraries/flexgrid.css'
import '../components/libraries/glitcheffect.css'
import Footer from '../components/footer/footer'
import ScrollProgress from "../components/scrollprogress/scrollprogress";


import Cover from "../media/images/geronimo-giqueaux-aOqZgLQ3hU8-unsplash.png";
import RTF1 from "../media/images/RocketTeam/RTF1.png"
import RTF2 from "../media/images/RocketTeam/RTF2.png"
import RTF3 from "../media/images/RocketTeam/RTF3.png"
import RTF4 from "../media/images/RocketTeam/RTF4.png"
import RTOLD from "../media/images/RocketTeam/32784385.png"
import RTNEW from "../media/images/RocketTeam/RTLogo.png"
import visitIcon from "../media/icons/Artboard 11.png"
import downloadIcon from "../media/icons/Artboard 13.png"

import Navigation from "../components/navigation/navigation";
import React, {useState, useEffect} from "react";
import Skill from "../components/skill/skill";

function RocketTeam() {
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
            <Navigation section="ROCKET TEAM"/>
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
                    <p className="p20 margin0 mono">Santa Cruz, CA // 2023 - Present // Web Developer & Business Lead</p>
                    <h1>Rocket Team</h1>
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
                <img src={RTF1} className="imageShowcase"/>
                <figcaption>new shirt designs</figcaption>
                <img src={RTF2} className="imageShowcase"/>
                <figcaption>
                    branding guides (download)
                    <img src={downloadIcon} className="figcaptionIcon2"/>
                </figcaption>
                <img src={RTF3} className="imageShowcase"/>
                <figcaption>
                    revamped website (visit)
                    <img src={visitIcon} className="figcaptionIcon"/>
                </figcaption>
                <img src={RTF4} className="imageShowcase"/>
                <figcaption>new banner design</figcaption>
                {/*<img src={LeWireframe} className="image100"/>*/}
                <h1 className="marginTop50px">from humble beginings</h1>

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
                        <Skill skillname="InDesign"/>
                        <Skill skillname="HTML/CSS/React"/>
                        <Skill skillname="Figma"/>
                        <Skill skillname="Branding"/>
                        <Skill skillname="Merchandising"/>
                        <Skill skillname="Marketing"/>
                        <Skill skillname="Fundraising"/>
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

export default RocketTeam;
