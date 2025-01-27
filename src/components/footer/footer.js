import './footer.css'


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
                        <button>Instagram</button>
                        <button>LinkedIn</button>
                        <button>Resume (PDF)</button>
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
