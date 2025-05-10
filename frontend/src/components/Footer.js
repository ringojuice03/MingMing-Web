import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer | padding-block-300">
            <div className="container">
                <div className="first-column">
                    <Link to="/"><img className="footer-logo" src="images/logo.png"/></Link>
                    <p>Baked to Perfection, Crafted for Delight</p>
                    <div className="cta-newsletter">
                        <p></p>
                    </div>
                </div>
                <div>
                    <div>
                        <nav className="footer-nav">

                        </nav>
                    </div>
                    <div>

                    </div>
                    <div>
                        <nav className="footer-nav-socials">
                        
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}