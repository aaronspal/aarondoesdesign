import './home.css'
import '../../components/libraries/flexgrid.css'
import Experience from '../../components/experience/experience.js'
import Header from "../../components/header/header";
import GradientBackground from '../../components/background/gradientBackground';
// import Sidebar from '../../components/sidebar/sidebar.js'
import imageTest from '../../media/images/geronimo-giqueaux-aOqZgLQ3hU8-unsplash.png'


// import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <section className="container hero">
                <div>
                    <h1>Aaron Spalding</h1>
                    <h2>UI/UX Designer </h2>
                </div>
            </section>
            <section className="container">
                <h2>about</h2>
                <section className="flexContainer">
                    <div className="w70">
                        I am a third-year Art and Design: Games and Playable Media studying at UC Santa Cruz. I love to design
                        experiences, interfaces, and art that people will interact with and benefit from. Though I am just a
                        student, I believe you can only learn so much in a lecture. I love throwing myself into new endeavors
                        and learning through experience. At my University, I’ve led two successful rebranding projects and a
                        website redevelopment while raising over $50,000 in new funding. I am also the designer and teacher for
                        CMPM17: Intro to 2D Fabrication, a class that specializes in teaching students how to use Adobe
                        Illustrator and apply it to a laser cutter, Cricut Maker 3, etc. I have also had had the opportunity to
                        work abroad in Berlin where I worked as a software engineer intern.
                    </div>
                    <div className="w30">
                        based in Santa Cruz, CA
                    </div>
                </section>
            </section>
            <section className="containerFull">
                <img src={imageTest} className="image100"/>
            </section>
            <section className="container">
                <h2>Featured Work</h2>
                <Experience title="UI/UX Intern at LogoLife" description="the stuff that I did" years="2025" />
                <hr/>
                <Experience title="Graphic Designer at Slugworks" description="the stuff that I did" years="2023-2025" />
                <hr/>
                <Experience title="Software & UI/UX Intern at Urban Monkeys" description="the stuff that I did" years="2023"/>
            </section>
            <section className="container">
                <h2>Student Organizations</h2>
                <Experience title="Business Lead at the UCSC Rocket Team" description="the stuff that I did" years="2023-2025"/>
                <hr/>
                <Experience title="Director of Finance at Formula Slug" description="the stuff that I did" years="2022-2024" />
            </section>
            <section className="container">
                <h2>Projects</h2>
                <Experience title="CMPM 115" description="the stuff that I did" years="2023-2025"/>
                <hr/>
                <Experience title="The Audition" description="the stuff that I did" years="2025" />
                <hr/>
                <Experience title="CrashPad" description="the stuff that I did" years="2025" />
                <hr/>
                <Experience title="Pavo" description="the stuff that I did" years="2025" />
            </section>
        </>
    );
}

export default Home;
