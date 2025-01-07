import './footer.css'


function Footer() {
    return (
        <footer className="content">
            <h1>let's get in touch!</h1>
            <section className="flexContainer g30">
                <div className="column w30 footerLeft">
                    <ul>
                        <li><h3>aaronspalding59@gmail.com</h3></li>
                        <li><h3>+1 949 592 9744</h3></li>
                        <li><h3>+49 173658 4938</h3></li>
                    </ul>                </div>
                <div className="w70 g30">
                    <div className="flexContainer g20">
                        <div className="column w50">
                            <hr/>
                            <h5>NAVIGATION</h5>
                            <ul>
                                <li>home</li>
                                <li>work</li>
                                <li>music</li>
                                <li>resume (pdf)</li>
                            </ul>
                        </div>
                        <div className="column w50">
                        <hr/>
                            <h5>SOCIAL MEDIA</h5>
                            <div className="flexContainer g10">
                                <button>Instagram</button>
                                <button>LinkedIn</button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="flexContainer g30">
                        <div className="column w50">
                            return to the top
                        </div>
                        <div className="column w50">
                            © Aaron Spalding 2025
                        </div>
                    </div>
                </div>
            </section>


            {/*Designed by Aaron Spalding. Santa Cruz, California*/}
        </footer>
    );
}

export default Footer;
