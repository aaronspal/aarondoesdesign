import './footer.css'
import Resume from "../../media/resume/ResumeAaronSpalding.pdf";


function Footer() {
    return (
        <footer className="content">
            <hr/>
            <h1>let's get in touch!</h1>
            <h2>aaronspalding59@gmail.com</h2>
            <hr/>
            <section className="flexContainer">
                <section className="column w50">
                    <p className="mono margin0">36.9741° N, 122.0308° W</p>
                </section>
                <section className="column w30">
                    <section className="flexContainer g10 marginN5px">
                        <a href="https://instagram.com/aarondoesdesign" target="_blank">
                            <button>Instagram</button>
                        </a>
                        <a href="https://linkedin.com/in/aaron-spalding" target="_blank">
                        <button>LinkedIn</button>
                    </a>
                        {/*<button>LinkedIn</button>*/}
                        <a href={Resume} target="_blank" rel="noopener noreferrer">
                            <button>Resume (PDF)</button>
                        </a>
                    </section>
                </section>
                <section className="column w20 textRight">
                    © Aaron Spalding 2025
                </section>
            </section>
            {/*Designed by Aaron Spalding. Santa Cruz, California*/}
        </footer>
    );
}

export default Footer;
