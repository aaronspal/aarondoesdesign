import './footer.css'


function Footer() {
    return (
        <footer className="content">
            <section className="flexContainer">
                <div className="column w20 flexColumn">
                    <button>Instagram</button>
                    <button>LinkedIn</button>
                    <button>Resume (PDF)</button>
                    {/*<button></button>*/}
                </div>
                <div className="column w80">
                    <h1>aaronspalding59@gmail.com</h1>
                    <h2>US: +1 949 592 9744</h2>
                    <h2>DE: +49 173 6584938</h2>
                </div>
            </section>


            Designed by Aaron Spalding. Santa Cruz, California
        </footer>
    );
}

export default Footer;
