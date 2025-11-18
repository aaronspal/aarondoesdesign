import './footer.css'
import logo from "../../media/icons/logo/logoWhite.png";

function Footer() {
    return (
        <footer className="container footer">
            <h2>Let's get in touch!</h2>
            <hr/>
            <div className="flexContainer g15">
                <img src={logo} alt="Aaron Spalding Logo" className="logo" />
                <p>aarondoesdesign</p>
            </div>
        </footer>
    );
}

export default Footer;