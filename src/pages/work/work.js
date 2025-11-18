import './work.css'
import '../../components/libraries/flexgrid.css'
import Experience from "../../components/experience/experience";
import { Link } from 'react-router-dom';

function Work() {
    return (
        <>
            <section className="container hero">
                <h1>Work</h1>
            </section>
            <section className="container">
                <h2>Work Experience</h2>
                <Experience title="UI/UX Intern at LogoLife" description="the stuff that I did" years="2025" />
                <hr/>
                <Experience title="Graphic Designer at Slugworks" description="the stuff that I did" years="2023-2025" />
                <hr/>
                <Experience title="Software & UI/UX Intern at Urban Monkeys" description="the stuff that I did" years="2023"/>
            </section>
            <section className="container">
                <h2>Student Organizations</h2>
                <Link to="/showcases/rocketteam">
                    <Experience title="Business Lead at the UCSC Rocket Team" description="the stuff that I did" years="2023-2025"/>
                </Link>
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

export default Work;