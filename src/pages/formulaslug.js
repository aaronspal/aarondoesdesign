import './home.css'
import './pages.css'
import '../components/libraries/flexgrid.css'
import '../components/libraries/glitcheffect.css'
import Footer from '../components/footer/footer'
import ScrollProgress from "../components/scrollprogress/scrollprogress";


import Cover from "../media/images/formulaslug/IMG_0292.png";
import FS1 from "../media/images/formulaslug/FSPPPackageDRAFT2.png"
import FS2 from "../media/images/formulaslug/FS2023BrandingGuides.png"
import FS3 from "../media/images/formulaslug/FS2023BrandingGuides2.png"
import FS4 from "../media/images/formulaslug/ShirtBack.png"
import FS5 from "../media/images/formulaslug/ShirtFront.png"
import FS6 from "../media/images/formulaslug/Zeichenfläche 5_2.png"
import FS7 from "../media/images/formulaslug/Zeichenfläche 8_4.png"
import FSOLD from "../media/images/formulaslug/FormulaSlugLogo.png"
import FSNEW from "../media/images/formulaslug/Artboard 1@3x.png"
import visitIcon from "../media/icons/Artboard 11.png"
import downloadIcon from "../media/icons/Artboard 13.png"

import Navigation from "../components/navigation/navigation";
import React, {useState, useEffect} from "react";
import Skill from "../components/skill/skill";
import CM1 from "../media/images/CMPM/Bildschirmfoto 2025-01-27 um 00.32.49.png";
import CM2 from "../media/images/CMPM/Bildschirmfoto 2025-01-27 um 00.34.30.png";
import CM3 from "../media/images/CMPM/Bildschirmfoto 2025-01-27 um 00.36.13.png";
import CM4 from "../media/images/CMPM/Bildschirmfoto 2025-01-27 um 00.37.17.png";

function FormulaSlug() {
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
            <Navigation section="FORMULA SLUG"/>
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
                    <p className="p20 margin0 mono">Santa Cruz, CA // 2022 - 2024 // Graphic Designer & Finance Lead</p>
                    <h1>Formula Slug</h1>
                </div>
            </div>
            <section className="marginTop100px flexContainer content h100">
                <section className="flexContainer g50">
                    <section className="column w60">
                        <h2>
                            my first work after highschool: creating a whole new look
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
                <img src={FS1} className="imageShowcase"/>
                <figcaption>formula slug partner program</figcaption>
                <section className="gridContainer2x2">
                    <div className="gridItem">
                        <img src={FS5} className="image100"/>
                    </div>
                    <div className="gridItem">
                        <img src={FS4} className="image100"/>
                    </div>
                </section>
                <figcaption>redesigned everyday tshirts</figcaption>
                <img src={FS3} className="imageShowcase"/>
                <figcaption>
                    branding guidelines (2023-2024)
                </figcaption>
                <img src={FS2} className="imageShowcase"/>
                <figcaption>
                    instagram templates
                </figcaption>
                <section className="gridContainer2x2">
                    <div className="gridItem">
                        <img src={FS6} className="image100"/>
                    </div>
                    <div className="gridItem">
                        <img src={FS7} className="image100"/>
                    </div>
                </section>
                <figcaption>
                    additional instagram templates
                </figcaption>
                <section className="flexContainer marginTop100px g30">
                    <section className="column w40">
                        <h2 className="tinyh1">defining a generation:</h2>
                        <h4 className="mono">how to breath new life to a team wreaked by the pandemic</h4>
                    </section>
                    <section className="column w60">
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
                    </section>
                </section>
                <section className="flexContainer g20">
                <section className="column w45">
                        <img src={FSOLD} className="image100new"/>
                        <figcaption>old logo (2015-2022)</figcaption>
                    </section>
                    <section className="column w55">
                        <img src={FSNEW} className="image100new"/>
                        <figcaption>redesigned logo (2022-PRESENT)</figcaption>
                    </section>
                </section>
                <section className="flexContainer marginTop100px">
                    <section className="gridContainer4x g15 w75">
                        <Skill skillname="Illustrator"/>
                        <Skill skillname="InDesign"/>
                        <Skill skillname="Adobe Premiere"/>
                        <Skill skillname="Branding"/>
                        <Skill skillname="Merchandising"/>
                        <Skill skillname="Outreach"/>
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

export default FormulaSlug;
