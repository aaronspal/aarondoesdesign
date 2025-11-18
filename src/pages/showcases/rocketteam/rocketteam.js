import './rocketteam.css'
import '../../../components/libraries/flexgrid.css'
import { useState, useEffect, useRef } from 'react'
import imageTest from "../../../media/images/geronimo-giqueaux-aOqZgLQ3hU8-unsplash.png";
import RTF1 from "../../../media/images/RocketTeam/RTF1.png"
import RTF2 from "../../../media/images/RocketTeam/RTF2.png"
import RTF3 from "../../../media/images/RocketTeam/RTF3.png"
import RTF4 from "../../../media/images/RocketTeam/RTF4.png"
import RTOLD from "../../../media/images/RocketTeam/32784385.png"
import RTNEW from "../../../media/images/RocketTeam/RTLogo.png"
import visitIcon from "../../../media/icons/Artboard 11.png"
// import Skill from "../../../components/skill/skill";

function RocketTeam() {
    const [padding, setPadding] = useState(20);
    const [virtualScroll, setVirtualScroll] = useState(0);
    const [topOffset, setTopOffset] = useState(70); // Initial offset for header height
    const [blur, setBlur] = useState(0);
    const [borderRadius, setBorderRadius] = useState(20);
    const maxScroll = 400;

    // Use ref to track current virtualScroll value without causing re-renders
    const virtualScrollRef = useRef(0);

    // Helper function to update both state and ref synchronously
    const updateVirtualScroll = (value) => {
        virtualScrollRef.current = value;
        setVirtualScroll(value);
    };

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    // Separate effect for calculations based on virtualScroll changes
    useEffect(() => {
        // Calculate padding, top offset, blur, and border radius based on virtual scroll
        const progress = Math.min(virtualScroll / maxScroll, 1);
        const newPadding = 20 * (1 - progress);
        const newTopOffset = 70 * (1 - progress); // Reduce from 70px to 0
        const newBlur = 40 * progress; // Increase from 0 to 40px
        // Border radius only changes in the last 10% (from 0.9 to 1.0)
        const borderRadiusProgress = Math.max(0, (progress - 0.9) / 0.1);
        const newBorderRadius = 20 * (1 - borderRadiusProgress); // Reduce from 20px to 0

        setPadding(newPadding);
        setTopOffset(newTopOffset);
        setBlur(newBlur);
        setBorderRadius(newBorderRadius);
    }, [virtualScroll, maxScroll]);

    // Event listeners effect - only runs once on mount
    useEffect(() => {
        const handleWheel = (e) => {
            // Only engage virtual scroll when at the top of the page
            if (window.scrollY === 0) {
                const currentScroll = virtualScrollRef.current;
                const newVirtualScroll = Math.max(0, currentScroll + e.deltaY);

                // Scrolling down: prevent until effect complete
                if (e.deltaY > 0 && newVirtualScroll < maxScroll) {
                    e.preventDefault();
                    updateVirtualScroll(newVirtualScroll);
                }
                // Scrolling up: allow virtual scroll to decrease
                else if (e.deltaY < 0) {
                    e.preventDefault();
                    updateVirtualScroll(newVirtualScroll);
                }
                // Effect complete, allow normal scrolling down
                else if (e.deltaY > 0) {
                    updateVirtualScroll(maxScroll);
                }
            }
        };

        const handleScroll = () => {
            // If user scrolls back to top, reset virtual scroll
            const currentScroll = virtualScrollRef.current;
            if (window.scrollY === 0 && currentScroll === maxScroll) {
                updateVirtualScroll(maxScroll);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [maxScroll]); // Only depends on maxScroll, not virtualScroll

    const isFullscreen = virtualScroll >= maxScroll;

    return (
        <>
            <section
                className={`imageContainer ${isFullscreen ? 'sticky' : ''}`}
                style={{
                    paddingLeft: `${padding}px`,
                    paddingRight: `${padding}px`,
                    paddingBottom: `${padding}px`,
                    top: `${topOffset}px`,
                    height: `calc(100vh - ${topOffset}px)`
                }}
            >
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: `${borderRadius}px` }}>
                    <img
                        src={imageTest}
                        className="image100"
                        alt="UCSC Rocket Team"
                        style={{
                            filter: `blur(${blur}px)`,
                            transform: 'scale(1.5)'
                        }}
                    />
                </div>
            </section>
            <section className="container content-section">
                <div className="hero-text">
                    <h1>UCSC Rocket Team</h1>
                    <p className="p20 margin0 mono">Santa Cruz, CA // 2023 - Present // Web Developer & Business Lead</p>
                </div>

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

                <hr/>
                <p className="p20 marginBottom25px">featured work</p>
                <img src={RTF1} className="image100"/>
                <figcaption>new shirt designs</figcaption>
                <img src={RTF2} className="image100"/>
                <a className="mono textRight externalLink noBorderTop" target="_blank"
                   href="https://www.ucscrocketry.org/">
                    branding guides (view)
                    <img src={visitIcon} className="figcaptionIcon" alt="visit"/>
                </a>
                <img src={RTF3} className="image100"/>
                <a className="mono textRight externalLink noBorderTop" target="_blank"
                   href="https://www.ucscrocketry.org/">
                    revamped website (visit)
                    <img src={visitIcon} className="figcaptionIcon" alt="visit"/>
                </a>
                <img src={RTF4} className="image100"/>
                <figcaption>new banner design</figcaption>

                <h1 className="marginTop50px">from humble beginings</h1>

                <section className="flexContainer marginTop50px g30">
                    <section className="column w30">
                        <img src={RTOLD} className="image100"/>
                        <figcaption>old logo (pre 2024)</figcaption>
                        <img src={RTNEW} className="image100"/>
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

                {/*<section className="flexContainer marginTop100px">*/}
                {/*    <section className="gridContainer4x g15 w75">*/}
                {/*        <Skill skillname="Illustrator"/>*/}
                {/*        <Skill skillname="InDesign"/>*/}
                {/*        <Skill skillname="HTML/CSS/React"/>*/}
                {/*        <Skill skillname="Figma"/>*/}
                {/*        <Skill skillname="Branding"/>*/}
                {/*        <Skill skillname="Merchandising"/>*/}
                {/*        <Skill skillname="Marketing"/>*/}
                {/*        <Skill skillname="Fundraising"/>*/}
                {/*    </section>*/}
                {/*    <section className="column w25">*/}
                {/*        <h2 className="textRight margin0">tools // skills</h2>*/}
                {/*    </section>*/}
                {/*</section>*/}
            </section>
            {/*<section className="container content-section-white">*/}
            {/*    <section className="flexContainer g50">*/}
            {/*        <section className="column w60">*/}
            {/*            <h2>*/}
            {/*                from a complete rebrand to $50,000 in new funding, the team has never been*/}
            {/*                sexier and more competetive*/}
            {/*            </h2>*/}
            {/*        </section>*/}
            {/*        <section className="column w40">*/}
            {/*            <p className="p20">*/}
            {/*                Rocket Team is a student-led organization that designs rockets*/}
            {/*                and research projects for the International Rocketry Engineering Challenge at the University*/}
            {/*                of California, Santa Cruz. The team boasts a size of over 60 members, making it one of the*/}
            {/*                larger*/}
            {/*                student organizations on campus.*/}
            {/*            </p>*/}

            {/*            <p className="p20">*/}
            {/*                I currently serve as the Business Lead and the lead Web Developer for the team. I am*/}
            {/*                responsible for the team's company outreach and fundraising. As a part of this wider effort,*/}
            {/*                I have spent extensive time rebranding the team and developing a new website to create a*/}
            {/*                professional feel.*/}
            {/*            </p>*/}
            {/*        </section>*/}
            {/*    </section>*/}

            {/*    <hr/>*/}
            {/*    <p className="p20 marginBottom25px">featured work</p>*/}
            {/*    <img src={RTF1} className="image100"/>*/}
            {/*    <figcaption>new shirt designs</figcaption>*/}
            {/*    <img src={RTF2} className="image100"/>*/}
            {/*    <a className="mono textRight externalLink noBorderTop" target="_blank"*/}
            {/*       href="https://www.ucscrocketry.org/">*/}
            {/*        branding guides (view)*/}
            {/*        <img src={visitIcon} className="figcaptionIcon" alt="visit"/>*/}
            {/*    </a>*/}
            {/*    <img src={RTF3} className="image100"/>*/}
            {/*    <a className="mono textRight externalLink noBorderTop" target="_blank"*/}
            {/*       href="https://www.ucscrocketry.org/">*/}
            {/*        revamped website (visit)*/}
            {/*        <img src={visitIcon} className="figcaptionIcon" alt="visit"/>*/}
            {/*    </a>*/}
            {/*    <img src={RTF4} className="image100"/>*/}
            {/*    <figcaption>new banner design</figcaption>*/}

            {/*    <h1 className="marginTop50px">from humble beginings</h1>*/}

            {/*    <section className="flexContainer marginTop50px g30">*/}
            {/*        <section className="column w30">*/}
            {/*            <img src={RTOLD} className="image100"/>*/}
            {/*            <figcaption>old logo (pre 2024)</figcaption>*/}
            {/*            <img src={RTNEW} className="image100"/>*/}
            {/*            <figcaption>redesigned logo (2024)</figcaption>*/}
            {/*        </section>*/}
            {/*        <section className="column w50">*/}
            {/*            <p className="p20">*/}
            {/*                Before joining, the team lacked a unified visual identity and had been using three different*/}
            {/*                logos from the last ten years. As the team's size and demands grew beginning in late 2023,*/}
            {/*                the need for cohesive branding and professionalism became much more apparent.*/}
            {/*            </p>*/}
            {/*            <p className="p20">*/}
            {/*                Joining in late 2023, I laid out a comprehensive strategy to rebrand the team within one*/}
            {/*                year. This*/}
            {/*                included a new logo, design language, merchandise, and website. The objective was to*/}
            {/*                position*/}
            {/*                the team less as a group of amateur rocket hobbyists and more of a professional,*/}
            {/*                competetive,*/}
            {/*                and premiere destination for all things aerospace at UC Santa Cruz.*/}
            {/*            </p>*/}
            {/*            <p className="p20">*/}
            {/*                One year later, and the rebranding project has been a total success. I created an entire new*/}
            {/*                branding guides for the team to follow along with sample instagram and powerpoint templates.*/}
            {/*                In the summer of 2024, I designed new shirts and a banner to be used at our events. I led a*/}
            {/*                web development team in Fall of 2024 and successfully rebranded our website, and as of*/}
            {/*                Winter*/}
            {/*                2025, I am looking beyond our club to design new marketing material and sponsorship packages*/}
            {/*                to be used for our business team.*/}
            {/*            </p>*/}
            {/*            <p className="p20">*/}
            {/*                In additional to my rebranding project, I have also raised approximately $50,000 through*/}
            {/*                grants*/}
            {/*                and sponsorship outreach for the team as of January 2025.*/}
            {/*            </p>*/}
            {/*        </section>*/}
            {/*    </section>*/}

            {/*    /!*<section className="flexContainer marginTop100px">*!/*/}
            {/*    /!*    <section className="gridContainer4x g15 w75">*!/*/}
            {/*    /!*        <Skill skillname="Illustrator"/>*!/*/}
            {/*    /!*        <Skill skillname="InDesign"/>*!/*/}
            {/*    /!*        <Skill skillname="HTML/CSS/React"/>*!/*/}
            {/*    /!*        <Skill skillname="Figma"/>*!/*/}
            {/*    /!*        <Skill skillname="Branding"/>*!/*/}
            {/*    /!*        <Skill skillname="Merchandising"/>*!/*/}
            {/*    /!*        <Skill skillname="Marketing"/>*!/*/}
            {/*    /!*        <Skill skillname="Fundraising"/>*!/*/}
            {/*    /!*    </section>*!/*/}
            {/*    /!*    <section className="column w25">*!/*/}
            {/*    /!*        <h2 className="textRight margin0">tools // skills</h2>*!/*/}
            {/*    /!*    </section>*!/*/}
            {/*    /!*</section>*!/*/}
            {/*</section>*/}

        </>
    );
}

export default RocketTeam;