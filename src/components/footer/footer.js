import './footer.css'


function Footer() {
    return (
        <footer className="content">
            <hr/>
            <h1>let's get in touch!</h1>
            <h2>aaronspalding59@gmail.com</h2>
            <hr/>
            <section className="flexContainer">
                <section className="column w20">
                    <p>36.9741° N, 122.0308° W</p>
                    <p>Santa Cruz, California</p>
                </section>
                <section className="column w30">
                    <ul>
                        <li>home</li>
                        <li>work</li>
                        <li>music</li>
                        <li>resume (pdf)</li>
                    </ul>
                </section>
                <section className="column w30">
                    <section className="flexContainer g10">
                        <button>Instagram</button>
                        <button>LinkedIn</button>
                        <button>GitHub</button>
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
